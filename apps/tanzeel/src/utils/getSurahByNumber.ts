import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { getSingleAyah } from './getSingleAyah';
import { getSurahInfo } from './getSurahInfo';
import { Ayah, SurahInfo, Word } from './types';

export const getSurahByNumber = async (number: number): Promise<{
	ayahs: Ayah;
	surahInfo: SurahInfo;
	lafz: Word[][];
}> => {
	let response: string = '';
	try {
		response = await readTextFile(`data/list/en-1.json`, { dir: BaseDirectory.Resource });
	} catch (err) {
		console.log('err', err);
	}
	const ayahs: Ayah = JSON.parse(response);
	const startingVerse: number = ayahs.startingVerse;
	const endingVerse: number = ayahs.endingVerse;
	const verses: Word[][] = [];
	for (let i: number = startingVerse; i <= endingVerse; i++) {
		const ayah: Word[] = await getSingleAyah(number, i);

		verses.push(ayah);
	}
	const lafz: Word[][] = verses;

	const surahInfo: SurahInfo = await getSurahInfo(number);

	return { ayahs, surahInfo, lafz };
};
