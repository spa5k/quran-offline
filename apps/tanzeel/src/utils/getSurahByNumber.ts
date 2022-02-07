import { readTextFile } from '@tauri-apps/api/fs';
import { Chapter } from './type';

export const getSurahByNumber = async (number: string) => {
	console.log('number', number);
	const response = await readTextFile(`scripts/quran/chapters/en/${number}.json`);
	const parsedData: Chapter[] = JSON.parse(response);

	return parsedData;
};
