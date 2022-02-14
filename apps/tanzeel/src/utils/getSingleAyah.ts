import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { Word } from './types';

export const getSingleAyah = async (surahNumber: number, ayahNumber: number): Promise<Word[]> => {
	const response: string = await readTextFile(`data/surah/ayahs/${surahNumber}/${ayahNumber}/en.json`, { dir: BaseDirectory.Resource });
	const ayah: Word[] = JSON.parse(response);

	return ayah;
};
