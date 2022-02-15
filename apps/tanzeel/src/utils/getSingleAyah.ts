import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { Lafz } from './types';

export const getSingleAyah = async (surahNumber: number, ayahNumber: number): Promise<Lafz[]> => {
	let response: string = '';
	try {
		response = await readTextFile(`data/surah/ayahs/${surahNumber}/${ayahNumber}/en.json`, { dir: BaseDirectory.Resource });
	} catch (err) {
		console.log(err);
	}
	const ayah: Lafz[] = JSON.parse(response);

	return ayah;
};
