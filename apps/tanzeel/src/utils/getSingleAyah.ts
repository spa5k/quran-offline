import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { Ayah } from './typev2';

export const getSingleAyah = async (surahNumber: number, ayahNumber: number): Promise<Ayah> => {
	const response: string = await readTextFile(`data/surah/ayahs/${surahNumber}/${ayahNumber}.json`, { dir: BaseDirectory.Resource });

	const ayah: Ayah = JSON.parse(response);

	return ayah;
};
