import { readTextFile } from '@tauri-apps/api/fs';
import { SurahInfo } from './type';

export const getSurahInfo = async (number: number): Promise<SurahInfo> => {
	const response: string = await readTextFile(`scripts/download/surahs/info/${number}/en.json`);
	const parsedData: SurahInfo = JSON.parse(response);

	return parsedData;
};
