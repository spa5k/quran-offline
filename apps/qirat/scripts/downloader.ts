// This function will download the chapterList from https://api.quran.com/api/v4/chapters
import fs from 'fs-extra';
import _ from 'lodash';

type GenerateQuranProps = {
	lang: Lang;
};

type Lang = string | null;

type GenerateByChapterProps = {
	chapters: Chapter[];
	lang: Lang;
};

type GenerateByVersesProps = {
	quran: {
		lang: Lang;
		chapters: Chapter[];
	};
	translation: Translation[];
};

type Chapter = {
	id: string;
	name: string;
	transliteration: string;
	translation: string;
	type: string;
	total_verses: number;
	verses: Verse[];
	chapter: number;
	verse: number;
	text: string;
};

type QuranPart = {
	chapter: number;
	verse: number;
	text: string;
};
// type quran have index string and the value is an array of QuranPart
type Quran = {
	[index: string]: QuranPart[];
};

type Verse = {
	id: number;
	text: string;
	translation: string;
	transliteration: string;
};

type Translation = {
	[index: string]: Chapter[];
};

const generateQuran = async ({ lang }: GenerateQuranProps) => {
	const filename = lang ? `quran_${lang}.json` : 'quran.json';

	console.log(`+ Generating ${filename}...`);

	// get the data already downloaded in data directory, by chapters, quran and translation.
	const chapters: Chapter[] = await fs.readJSON(`data/chapters/${lang === null || lang === 'transliteration' ? 'en' : lang}.json`);
	const quran: Quran = await fs.readJSON('quran.json');
	const translation: Translation = lang ? await fs.readJSON(`data/editions/${lang}.json`) : null;

	const data = chapters.map(item => {
		const chapter: Chapter = {
			id: item.id,
			name: item.name,
			transliteration: item.transliteration,
			translation: item.translation,
			type: item.type,
			total_verses: item.total_verses,
			chapter: item.chapter,
			text: item.text,
			verse: item.verse,
			verses: quran[item.id].map((i, idx) => {
				const verse: Verse = {
					id: i.verse,
					text: i.text,
					translation: '',
					transliteration: '',
				};

				if (translation) {
					if (lang === 'transliteration') {
						verse.transliteration = translation[item.id][idx].text;
					} else if (lang === 'translation') {
						verse.translation = translation[item.id][idx].text;
					}
				}
				return verse;
			}),
		};

		if (lang === null) {
			chapter.translation = '';
		}

		return chapter;
	});

	await fs.outputJson(`quran/${filename}`, data, { spaces: 2 });

	return data;
};

// generate by chapter
const generateByChapter = async ({ lang, chapters }: GenerateByChapterProps) => {
	await Promise.all(chapters.map(chapter => {
		const filename = lang ? `${lang}/${chapter.id}.json` : `${chapter.id}.json`;

		console.log(`+ Generating chapter: ${filename}...`);

		return fs.outputJson(`quran/chapters/${filename}`, chapter, { spaces: 2 });
	}));

	const indexFilename = lang ? `${lang}/index.json` : 'index.json';

	const index = chapters.map(({ verses, ...chapter }) => ({
		...chapter,
	}));

	await fs.outputJson(`quran/chapters/${indexFilename}`, index, { spaces: 2 });
};

// generate by verse
const generateByVerses = async ({ quran, translation }: GenerateByVersesProps) => {
	let id = 1;
	const verses = _.flatten(quran.chapters.map((chapter, chapterIdx) =>
		chapter.verses.map((verse, verseIdx) => ({
			id: id++,
			number: verse.id,
			text: verse.text,
			translations: _.zipObject(
				translation.map(transQuran => transQuran.chapters[chapterIdx].verses[verseIdx].translation),
			),
			transliteration: verse.transliteration,
			chapter: {
				id: chapter.id,
				name: chapter.name,
				transliteration: chapter.transliteration,
				translations: _.zipObject(
					translation.map(transQuran => transQuran.chapters[chapterIdx].translation),
				),
				type: chapter.type,
			},
		}))
	));

	const chunkVerses = _.chunk(verses, 100);
	for (const chunkVerse of chunkVerses) {
		await Promise.all(chunkVerse.map(verse => {
			const filename = `${verse.id}.json`;

			console.log(`+ Generating verse: ${filename}...`);

			return fs.outputJson(`quran/verses/${filename}`, verse, { spaces: 2 });
		}));
	}
};

const main = async () => {
	await fs.emptyDir('quran');

	const langCodes = [null, 'bn', 'en', 'es', 'fr', 'id', 'ru', 'sv', 'tr', 'ur', 'zh'];

	const [transliterationChapters, ...chaptersList] = await Promise.all(
		['transliteration', ...langCodes].map(lang => generateQuran({ lang })),
	);

	const qurans = chaptersList.map((chapters, idx) => ({
		lang: langCodes[idx],
		chapters: chapters.map((chapter, chapterIdx) => ({
			...chapter,
			verses: chapter.verses.map((verse, verseIdx) => ({
				...verse,
				transliteration: transliterationChapters[chapterIdx].verses[verseIdx].transliteration,
			})),
		})),
	}));

	await Promise.all(qurans.map(quran => generateByChapter({ chapters: quran.chapters, lang: quran.lang })));
	// @ts-ignore
	await generateByVerses({ quran: qurans[0], translation: qurans.slice(2) });

	console.log('✓ Done');
};

main().catch(console.error);
