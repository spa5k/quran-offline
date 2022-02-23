import { invoke } from '@tauri-apps/api';

export const playOneAyah = async (surahNumber: number, ayahNumber: number, reciter = 'Abdul_Basit_Murattal_64kbps.mp3'): Promise<void> => {
	await invoke('play_recitation', { surahNumber, ayahNumber, reciter });
};
