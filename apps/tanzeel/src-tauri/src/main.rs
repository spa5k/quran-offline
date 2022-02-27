#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::io::BufReader;

#[tauri::command]
async fn play_recitation(surah_number: i32, ayah_number: i32, reciter: String) {
    // get the current running directory
    let current_dir = std::env::current_dir().unwrap();
    // move the directory inside data/recitation
    let recitation_dir = current_dir
        .join("data")
        .join("recitation")
        .join(&surah_number.to_string())
        .join(&ayah_number.to_string());
    let mut files = std::fs::read_dir(recitation_dir).unwrap();
    // get the first file
    let file = files.next().unwrap().unwrap();

    let path = file.path();
    let (_stream, handle) = rodio::OutputStream::try_default().unwrap();
    let sink = rodio::Sink::try_new(&handle).unwrap();
    let file = std::fs::File::open(path).unwrap();

    sink.append(rodio::Decoder::new(BufReader::new(file)).unwrap());

    sink.sleep_until_end();
    println!("playing recitation of - surah_number: {surah_number}, ayah_number: {ayah_number}")
        
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![play_recitation])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
