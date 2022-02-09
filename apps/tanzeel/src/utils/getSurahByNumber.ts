import { readTextFile } from '@tauri-apps/api/fs';
import { Chapter } from './type';

export const getSurahByNumber = async (number: string): Promise<{
	verses: Chapter[];
	chapterInfo: Chapter[];
}> => {
	console.log('number', number);
	const response = await readTextFile(`scripts/download/verses/${number}/en.json`);
	const parsedData: Chapter[] = JSON.parse(response);
	const chapterInfo = await getChapterInfo(number);

	return { verses: parsedData, chapterInfo };
};

export const getChapterInfo = async (number: string) => {
	const response = await readTextFile(`scripts/download/info/${number}/en.json`);
	const parsedData: Chapter[] = JSON.parse(response);

	return parsedData;
};
