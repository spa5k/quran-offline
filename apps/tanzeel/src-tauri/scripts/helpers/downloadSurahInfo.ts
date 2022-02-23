import fastq, { queueAsPromised } from 'fastq';
import fs from 'fs-extra';
import { $fetch } from 'ohmyfetch';
import { LangProps } from './downloadSurahList';

export const downloadSurahInfo = async ({ lang }: LangProps): Promise<void> => {
	interface Task {
		chapterNumber: number;
		lang: string;
	}

	const q: queueAsPromised<Task> = fastq.promise(asyncWorker, 2);
	for (let index: number = 1; index <= 114; index++) {
		await q.push({ chapterNumber: index, lang });
	}

	async function asyncWorker(arg: Task): Promise<void> {
		const chapterNumber: number = arg.chapterNumber;

		// first check if the chapter has already been downloaded -
		// if it has, then skip it
		const downloadedSurah: boolean = await fs.pathExists(`src-tauri/scripts/download/surahs/info/${chapterNumber}/${lang}.json`);

		if (!downloadedSurah) {
			const chapterInfo = await $fetch(
				`https://api.quran.com/api/v4/chapters/${chapterNumber}/info?language=${arg.lang}`,
				{ method: 'GET' },
			);
			await fs.outputJSON(`src-tauri/scripts/download/surahs/info/${chapterNumber}/${lang}.json`, chapterInfo.chapter_info, { spaces: 2 });

			console.log(`Downloaded Info for surah ${chapterNumber} lang - ${lang}`);
		} else {
			console.log(`Already have Info for surah - ${chapterNumber} lang - ${lang}`);
		}
	}
};
