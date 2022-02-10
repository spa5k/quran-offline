import { readTextFile } from '@tauri-apps/api/fs';
import { SurahDetail } from './type';

export const getSurahDetails = async (number: number): Promise<SurahDetail> => {
	const response: string = await readTextFile(`scripts/download/surahs/detail/${number}/en.json`);
	const details: SurahDetail = JSON.parse(response);

	return details;
};
