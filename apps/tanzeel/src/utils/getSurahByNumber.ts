import { readTextFile } from '@tauri-apps/api/fs';
import { getSurahDetails } from './getSurahDetails';
import { getSurahInfo } from './getSurahInfo';
import { Surah, SurahDetail, SurahInfo } from './type';

export const getSurahByNumber = async (number: string): Promise<{
	ayahs: Surah;
	surahInfo: SurahInfo;
	surahDetail: SurahDetail;
}> => {
	const response: string = await readTextFile(`scripts/download/surahs/ayahs/${number}/en.json`);
	const ayahs: Surah = JSON.parse(response);
	const surahInfo: SurahInfo = await getSurahInfo(number);
	const surahDetail: SurahDetail = await getSurahDetails(number);

	return { ayahs, surahInfo, surahDetail };
};
