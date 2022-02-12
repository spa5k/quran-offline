import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { getSurahDetails } from './getSurahDetails';
import { getSurahInfo } from './getSurahInfo';
import { Ayahs, SurahDetail, SurahInfo } from './type';

export const getSurahByNumber = async (number: number): Promise<{
	ayahs: Ayahs[];
	surahInfo: SurahInfo;
	surahDetail: SurahDetail;
}> => {
	const response: string = await readTextFile(`scripts/download/surahs/ayahs/${number}/en.json`, { dir: BaseDirectory.Resource });

	const ayahs: Surah = JSON.parse(response);
	const surahInfo: SurahInfo = await getSurahInfo(number);
	const surahDetail: SurahDetail = await getSurahDetails(number);

	return { ayahs, surahInfo, surahDetail };
};
