import fs from 'fs-extra';
import got from 'got';

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
	const chapters = await got.get(`https://api.quran.com/api/v4/chapters?language=${lang}`);

	fs.writeJSON(`src-tauri/scripts/download/chapters/${lang}.json`, chapters.body);
};

const downloadChapterInfo = async ({ lang, number }: DownloadChapterInfoProps) => {
	const chapterInfo = await got.get(`https://api.quran.com/api/v4/chapters/${number}/info?language=${lang}`);

	fs.writeJSON(`src-tauri/scripts/download/chapters/info/${lang}/${number}.json`, chapterInfo.body);
};

const downloadVersesByChapter = async ({ chapterNumber, lang }: DownloadVersesByChapterProps) => {
	let page = 1;
	let perPage = 100;

	const totalPagesRequest = await got.get(`https://api.quran.com/api/v4/chapters/${chapterNumber}/verses?language=${lang}&page=${page}&per_page=${perPage}`);
	const parsedTotalPages = JSON.parse(totalPagesRequest.body);
	const totalPages = parsedTotalPages.pagination.total_pages;

	const chapterInfo = await got.get(
		`https://api.quran.com/api/v4/verses/by_chapter/1?language=${lang}&words=true&translations=true&tafsirs=true&word_fields=text_uthmani%2Ctext_uthmani_simple%2Ctext_imlaei_simple%2Ctext_indopak&fields=text_uthmani%2Ctext_uthmani_simple%2Ctext_imlaei_simple%2Ctext_indopak&page=${page}&per_page=${perPage}`,
	);

	const parsedBody = JSON.parse(chapterInfo.body);

	fs.writeJSON(`src-tauri/scripts/download/verses/${chapterNumber}/${lang}.json`, parsedBody);
};
