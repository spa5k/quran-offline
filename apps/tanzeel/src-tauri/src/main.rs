#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use sqlx::{sqlite::SqlitePool, Pool, Sqlite};

struct MyState {
    pool: Pool<Sqlite>,
}

#[tauri::command]
async fn my_custom_command(state: tauri::State<'_, MyState>) -> Result<(), ()> {
    let pool = &state.pool;
    // Loop over the list of uthmanic
    // run get get_surah_by_number
    // and get the name
    // and print it
    for i in 1..114 {
        let surah = get_surah_by_number(pool, i).await;
        // if surah has no error, print it
        if surah.is_ok() {
            println!("{}", surah.unwrap());
        }
    }

    Ok(())
}

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let pool = SqlitePool::connect("sqlite:./data/database/data.db").await?;

    let tau = tauri::Builder::default()
        .manage(MyState { pool })
        .invoke_handler(tauri::generate_handler![my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    Ok(tau)
}

async fn get_surah_by_number(pool: &Pool<Sqlite>, number: i32) -> Result<String, anyhow::Error> {
    // Get surah by the number and return its text
    let surah = sqlx::query!("SELECT text FROM uthmanic WHERE surah = ?", number)
        .fetch_one(pool)
        .await?;

    Ok(surah.text)
}
// let list = sqlx::query("select * from uthmanic where surah = 1")
//     .fetch_all(&pool)
//     .await?;
// // Loop over the list of uthmanic
// for rec in list {
//     println!("- [{}] {}", rec.index, &rec.text,);
// }

// Ok(String::from(""))
