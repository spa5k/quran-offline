import type { queueAsPromised } from 'fastq';
import fastq from 'fastq';
import fs from 'fs-extra';
import { $fetch } from 'ohmyfetch';

type LangProps = {
	lang: string;
};

const downloadSurahList = async ({ lang }: LangProps): Promise<void> => {
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

const downloadSurahInfo = async ({ lang }: LangProps): Promise<void> => {
	type Task = {
		chapterNumber: number;
		lang: string;
	};

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

const downloadAllAyahsBySurah = async ({ lang }: { lang: string; }): Promise<void> => {
	type Task = {
		chapterNumber: number;
		lang: string;
	};

	const q: queueAsPromised<Task> = fastq.promise(asyncWorker, 2);
	for (let index: number = 1; index <= 114; index++) {
		await q.push({ chapterNumber: index, lang });
	}

	async function asyncWorker(arg: Task): Promise<void> {
		const chapterNumber: number = arg.chapterNumber;

		// first check if the chapter has already been downloaded -
		// if it has, then skip it
		// eslint-disable-next-line @typescript-eslint/typedef
		const downloadedChapter = await fs.pathExists(`src-tauri/scripts/download/surahs/ayahs/${chapterNumber}/${lang}.json`);

		if (!downloadedChapter) {
			// eslint-disable-next-line @typescript-eslint/typedef
			const chapterInfo = await $fetch(
				`https://api.quran.com/api/v4/verses/by_chapter/${chapterNumber}?language=${arg.lang}&words=true&translations=true&tafsirs=true&word_fields=text_uthmani%2Ctext_uthmani_simple%2Ctext_imlaei_simple%2Ctext_indopak&fields=text_uthmani%2Ctext_uthmani_simple%2Ctext_imlaei_simple%2Ctext_indopak&page=1&per_page=1000`,
				{ method: 'GET' },
			);
			await fs.outputJSON(`src-tauri/scripts/download/surahs/ayahs/${chapterNumber}/${lang}.json`, chapterInfo.verses, { spaces: 2 });

			console.log(`Downloaded ayahs for surah ${chapterNumber} lang - ${lang}`);
		} else {
			console.log(`Already have ayahs for surah - ${chapterNumber} lang - ${lang}`);
		}
	}
};

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

const downloadSurahDetails = async ({ lang }: LangProps): Promise<void> => {
	type Task = {
		chapterNumber: number;
	};

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

const main = async (): Promise<void> => {
	// Download All Verses Chapter by Chapter
	// const langCodes = ['bn', 'en', 'es', 'fr', 'id', 'ru', 'sv', 'tr', 'ur', 'zh'];
	const lang = 'en';
	// for (const lang of langCodes) {
	await Promise.all([
		downloadSurahList({ lang }),
		downloadSurahInfo({ lang }),
		downloadAllAyahsBySurah({ lang }),
		downloadSurahDetails({ lang }),
	]);

	// }
};

main().catch((err) => console.error(err));
