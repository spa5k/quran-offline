#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use sqlx::sqlite::SqlitePool;
use std::env;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let pool = SqlitePool::connect(&env::var("DATABASE_URL")?).await?;

    let tau = tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

    Ok(())
}

async fn add_username(pool: &SqlitePool) -> anyhow::Result<i64> {
    let mut conn = pool.acquire().await?;
}
