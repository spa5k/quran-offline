#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use sqlx::{sqlite::SqlitePool, Pool, Sqlite};
use tauri::{self, generate_context, generate_handler};

// Command to get array of ayah from a surah number
#[tauri::command]
async fn get_all_ayahs(surah_number: String)-> Result<AyahVector, String> {
    let pool = SqlitePool::connect("sqlite:./data/database/data.db").await;
    // check pool else return error as string
    let pool = match pool {
        Ok(pool) => pool,
        Err(e) => return Err(format!("{}", e)),
    };
    let surah_number: i32 = surah_number.parse().unwrap();
    let stmt = get_ayah_by_surah_number(&pool, surah_number).await;
    // check stmt and return error as string, stmt as AyahVector
    match stmt {
        Ok(stmt) => return Ok(stmt),
        Err(e) => return Err(format!("{}", e)),
    };
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(generate_handler![get_all_ayahs])
        .run(generate_context!())
        .expect("error while running tauri application");
}

#[derive(serde::Serialize)]
struct Ayah {
    ayah: i32,
    text: String,
}

#[derive(serde::Serialize)]
struct AyahVector {
    ayah: Vec<Ayah>,
}

async fn get_ayah_by_surah_number(
    pool: &Pool<Sqlite>,
    number: i32,
) -> Result<AyahVector, sqlx::Error> {
    // Get surah by the number and return its text
    let surah = sqlx::query!("SELECT text,ayah FROM ayah JOIN simple_main ON simple_main.id = ayah.simple_id WHERE surah = ?", number)
        .fetch_all(pool)
        .await?;
    
    // create a new vector of type AyahVector
    let mut ayah_vector = AyahVector {
        ayah: Vec::new(),
    };
    // iterate over surah and push ayah one by one into ayah vector
    for ayah in surah {
        ayah_vector.ayah.push(Ayah {
            ayah: ayah.ayah as i32,
            text: ayah.text,
        });
    }
    Ok(ayah_vector)
}
