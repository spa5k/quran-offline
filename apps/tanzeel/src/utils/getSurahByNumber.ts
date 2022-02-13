import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { getSingleAyah } from './getSingleAyah';
import { getSurahInfo } from './getSurahInfo';
import { Ayah, SurahInfo } from './typev2';
// apps\tanzeel\src-tauri\data\surah\ayahs\1\en.json
export const getSurahByNumber = async (number: number): Promise<{
	ayahs: Ayah;
	surahInfo: SurahInfo;
}> => {
	const address: string = `data/surah/ayahs/${number}/en.json`;
	console.log(number, address);
	const response: string = await readTextFile(address, { dir: BaseDirectory.Resource });

	const ayahs: Ayah = JSON.parse(response);
	const startingVerse: number = ayahs.startingVerse;
	const endingVerse: number = ayahs.endingVerse;
	const verses: Ayah[] = [];
	for (let i: number = startingVerse; i <= endingVerse; i++) {
		const ayah: Ayah = await getSingleAyah(number, i);

		verses.push(ayah);
	}
	ayahs.lafz = verses;

	const surahInfo: SurahInfo = await getSurahInfo(number);

	return { ayahs, surahInfo };
};
