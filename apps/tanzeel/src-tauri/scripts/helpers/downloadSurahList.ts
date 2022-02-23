import fs from 'fs-extra';
import { $fetch } from 'ohmyfetch';

export interface LangProps {
	lang: string;
}
export const downloadSurahList = async ({ lang }: LangProps): Promise<void> => {
	const surahs = await $fetch(`https://api.quran.com/api/v4/chapters?language=${lang}`, { method: 'GET' });

	// first check if chapters list has already been downloaded -
	// if it has, then skip it
	const downloadedSurahs = await fs.pathExists(`src-tauri/scripts/download/surahs/list/${lang}.json`);

	if (!downloadedSurahs) {
		await fs.outputJSON(`src-tauri/scripts/download/surahs/list/${lang}.json`, surahs.chapters, { spaces: 2 });
		console.log('Downloaded surahs list for lang - ', lang);
	} else {
		console.log('Already have surahs list for lang - ', lang);
	}
};
