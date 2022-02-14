import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { getSingleAyah } from './getSingleAyah';
import { getSurahInfo } from './getSurahInfo';
import { Ayah, Lafz, SurahInfo } from './types';

export const getSurahByNumber = async (number: number): Promise<{
	ayahs: Ayah;
	surahInfo: SurahInfo;
	lafz: Lafz[][];
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
	const verses: Lafz[][] = [];
	for (let i: number = startingVerse; i <= endingVerse; i++) {
		const ayah: Lafz[] = await getSingleAyah(number, i);

		verses.push(ayah);
	}
	const lafz: Lafz[][] = verses;

	const surahInfo: SurahInfo = await getSurahInfo(number);

	return { ayahs, surahInfo, lafz };
};
