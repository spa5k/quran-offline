import { readTextFile } from '@tauri-apps/api/fs';
import { Chapter } from './type';

export const getChapterList = async () => {
	const response = await readTextFile('scripts/data/chapters/en.json');
	const parsedData: Chapter[] = JSON.parse(response);

	return parsedData;
};
