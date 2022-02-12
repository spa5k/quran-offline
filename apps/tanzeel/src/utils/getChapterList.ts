import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { SurahList } from './type';

export const getSurahList = async (): Promise<SurahList[]> => {
	const response: string = await readTextFile('scripts/download/surahs/list/en.json', { dir: BaseDirectory.Resource });

	const parsedData: SurahList[] = JSON.parse(response);

	return parsedData;
};
