import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { SurahInfo } from './typev2';

export const getSurahInfo = async (number: number): Promise<SurahInfo> => {
	const response: string = await readTextFile(`scripts/download/surahs/info/${number}/en.json`, { dir: BaseDirectory.Resource });

	const parsedData: SurahInfo = JSON.parse(response);

	return parsedData;
};
