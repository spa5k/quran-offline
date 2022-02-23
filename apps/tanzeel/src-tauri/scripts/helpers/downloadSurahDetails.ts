import fastq, { queueAsPromised } from 'fastq';
import fs from 'fs-extra';
import { $fetch } from 'ohmyfetch';
import { LangProps } from './downloadSurahList';

// const downloadAllTranslationsBySurah = async ({ lang }: { lang: string }): Promise<void> => {
// 	type Task = {
// 		chapterNumber: number;
// 		lang: string;
// 	};
// 	const q: queueAsPromised<Task> = fastq.promise(asyncWorker, 2);
// 	for (let index: number = 1; index <= 114; index++) {
// 		await q.push({ chapterNumber: index, lang });
// 	}
// 	async function asyncWorker(arg: Task): Promise<void> {
// 		const chapterNumber: number = arg.chapterNumber;
// 		// first check if the chapter has already been downloaded -
// 		// if it has, then skip it
// 		// eslint-disable-next-line @typescript-eslint/typedef
// 		const downloadedChapter = await fs.pathExists(`src-tauri/scripts/download/surahs/translations/${chapterNumber}/${lang}.json`);
// 		if (!downloadedChapter) {
// 			// eslint-disable-next-line @typescript-eslint/typedef
// 			const chapterInfo = await $fetch(
// 				`https://api.quran.com/api/v4/quran/translations/20?chapter_number=${chapterNumber}`,
// 				{ method: 'GET' },
// 			);
// 			await fs.outputJSON(`src-tauri/scripts/download/surahs/translations/${chapterNumber}/${lang}/${chapterInfo.meta.translation_name}.json`, chapterInfo.translations, { spaces: 2 });
// 			console.log(`Downloaded ayahs for surah ${chapterNumber} lang - ${lang}`);
// 		} else {
// 			console.log(`Already have ayahs for surah - ${chapterNumber} lang - ${lang}`);
// 		}
// }
export const downloadSurahDetails = async ({ lang }: LangProps): Promise<void> => {
	interface Task {
		chapterNumber: number;
	}

	const q: queueAsPromised<Task> = fastq.promise(asyncWorker, 2);

	for (let index: number = 1; index <= 114; index++) {
		await q.push({ chapterNumber: index });
	}

	async function asyncWorker(arg: Task): Promise<void> {
		const chapterNumber: number = arg.chapterNumber;

		// first check if the chapter has already been downloaded -
		// if it has, then skip it
		const downloadedSurah: boolean = await fs.pathExists(`src-tauri/scripts/download/surahs/detail/${chapterNumber}/${lang}.json`);

		if (!downloadedSurah) {
			const chapterInfo = await $fetch(
				`https://api.quran.com/api/v4/chapters/${chapterNumber}?language=${lang}`,
				{ method: 'GET' },
			);
			await fs.outputJSON(`src-tauri/scripts/download/surahs/detail/${chapterNumber}/${lang}.json`, chapterInfo.chapter, { spaces: 2 });

			console.log(`Downloaded Details for surah ${chapterNumber} lang - ${lang}`);
		} else {
			console.log(`Already have Details for surah - ${chapterNumber} lang - ${lang}`);
		}
	}
};
