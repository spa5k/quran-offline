import { readTextFile } from '@tauri-apps/api/fs';
import { SurahList } from './type';

export const getSurahList = async (): Promise<SurahList[]> => {
	const response: string = await readTextFile('scripts/download/surahs/list/en.json');

	const parsedData: SurahList[] = JSON.parse(response);

	return parsedData;
};
