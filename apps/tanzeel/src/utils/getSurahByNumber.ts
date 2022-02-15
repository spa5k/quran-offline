import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { getSurahInfo } from './getSurahInfo';
import { Ayah, SurahInfo } from './types';

export const getSurahByNumber = async (number: number): Promise<{
	ayahs: Ayah;
	surahInfo: SurahInfo;
	startingVerse: number;
	endingVerse: number;
}> => {
	let response: string = '';
	try {
		response = await readTextFile(`data/list/en-${number}.json`, { dir: BaseDirectory.Resource });
	} catch (err) {
		console.log('err', err);
	}
	const ayahs: Ayah = JSON.parse(response);
	const startingVerse: number = ayahs.startingVerse;
	const endingVerse: number = ayahs.endingVerse;

	const surahInfo: SurahInfo = await getSurahInfo(number);

	return { ayahs, surahInfo, startingVerse, endingVerse };
};
