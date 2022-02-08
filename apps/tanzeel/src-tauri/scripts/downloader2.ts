import type { queueAsPromised } from 'fastq';
import fastq from 'fastq';
import fs from 'fs-extra';
import { $fetch } from 'ohmyfetch';

type DownloadChapterProps = {
	lang?: string;
};

type DownloadChapterInfoProps = {
	lang?: string;
	number: number;
};

type VerseType = 'uthmani' | 'uthmani_simple' | 'indopak' | 'imlaei';

type VerseText = `text_${VerseType}`;

type Verse = {
	id: number;
	verse_key: string;
	text: string;
};

enum VersesType {
	UTHMANI = 'uthmani',
	UTHMANI_SIMPLE = 'uthmani_simple',
	INDOPAK = 'indopak',
	IMLAEI = 'imlaei',
}

type DownloadVersesByChapterProps = {
	lang: string;
	chapterNumber: number;
};

const downloadChapters = async ({ lang }: DownloadChapterProps) => {
	if (!lang) lang = 'en';
	const chapters = await $fetch(`https://api.quran.com/api/v4/chapters?language=${lang}`, { method: 'GET' });

	fs.writeJSON(`src-tauri/scripts/download/chapters/${lang}.json`, chapters.body);
};

const downloadAllVerses = async ({ lang }: { lang: string; }) => {
	type Task = {
		chapterNumber: number;
		lang: string;
	};

	const q: queueAsPromised<Task> = fastq.promise(asyncWorker, 4);
	for (let index = 1; index <= 114; index++) {
		const chapterNumber = index;
		q.push({ chapterNumber, lang });
	}
	async function asyncWorker(arg: Task): Promise<void> {
		const chapterNumber = arg.chapterNumber;
		const chapterInfo = await $fetch(
			`https://api.quran.com/api/v4/verses/by_chapter/${chapterNumber}?language=${
				arg.lang || 'en'
			}&words=true&translations=true&tafsirs=true&word_fields=text_uthmani%2Ctext_uthmani_simple%2Ctext_imlaei_simple%2Ctext_indopak&fields=text_uthmani%2Ctext_uthmani_simple%2Ctext_imlaei_simple%2Ctext_indopak&page=1&per_page=1000`,
			{ method: 'GET' },
		);
		await fs.outputJSON(`src-tauri/scripts/download/chapters/verses/${chapterNumber}/${lang}.json`, chapterInfo.verses, { spaces: 2 });

		console.log('Downloaded verses for chapter - ', chapterNumber);
	}
};

const main = async () => {
	try {
		await downloadAllVerses({ lang: 'en' });
	} catch (err) {
		console.error(err);
	}
};

main().catch((err) => console.error(err));
