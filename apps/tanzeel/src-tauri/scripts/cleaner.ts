/* eslint-disable @typescript-eslint/typedef */
// merge the surahs/detail and surahs/info files by their number.
import fastq, { queueAsPromised } from 'fastq';
import fs from 'fs-extra';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

interface SurahDetail {
	id: number;
	revelation_place: string;
	revelation_order: number;
	bismillah_pre: boolean;
	name_simple: string;
	name_complex: string;
	name_arabic: string;
	verses_count: number;
	pages: number[];
	translated_name: TranslatedName;
}

interface SurahInfo {
	id: number;
	chapter_id: number;
	language_name: string;
	short_text: string;
	source: string;
	text: string;
}

interface TranslatedName {
	language_name: LanguageName;
	name: string;
}

enum LanguageName {
	English = 'english',
}
interface CombinedSurah {
	id: number;
	chapterId: number;
	shortText: string;
	source: string;
	text: string;
	revelationPlace: string;
	reveleationOrder: number;
	bismillahPre: boolean;
	nameSimple: string;
	nameComplex: string;
	nameArabic: string;
	versesCount: number;
	translatedName: string;
}

interface AyahTypeNoWords {
	id: number;
	verseNumber: number;
	verseKey: string;
	juzNumber: number;
	hizbNumber: number;
	rubElNumber: number;
	rukuNumber: number;
	manzilNumber: number;
	sajdaNumber: number;
	textUthmani: string;
	textUthmaniSimple: string;
	textImlaeiSimple: string;
	textIndopak: string;
	pageNumber: number;
	words?: unknown;
	startingVerse: number;
	endingVerse: number;
	totalVerses: number;
}

export enum RevelationPlace {
	Madinah = 'madinah',
	Makkah = 'makkah',
}
export interface SingleAyah {
	id?: number;
	position?: number;
	audioURL?: null | string;
	charTypeName?: string;
	textUthmani?: string;
	textUthmaniSimple?: string;
	textImlaeiSimple?: string;
	textIndopak?: string;
	pageNumber?: number;
	lineNumber?: number;
	text?: string;
	translation?: Translation;
	transliteration?: Translation;
}

export interface Translation {
	text?: null | string;
	languageName?: LanguageName;
}

const additionalInfoSurahList = async ({ lang }: { lang: string; }): Promise<void> => {
	const finalized = [];
	const surahList: SurahDetail[] = await fs.readJSON(`src-tauri/scripts/download/surahs/list/${lang}.json`);
	let versesCount = 1;
	for (let index: number = 0; index < 114; index++) {
		const surah = surahList[index];
		const surahStartVerse = versesCount;
		const surahVerseEnd = versesCount + surah.verses_count - 1;
		versesCount = surahVerseEnd + 1;
		finalized.push({
			bismillahPre: surah.bismillah_pre,
			endingVerse: surahVerseEnd,
			nameArabic: surah.name_arabic,
			nameComplex: surah.name_complex,
			nameSimple: surah.name_simple,
			revelationOrder: surah.revelation_order,
			revelationPlace: surah.revelation_place,
			startingVerse: surahStartVerse,
			totalVerses: surah.verses_count,
			translatedName: surah.translated_name.name,
			versesCount: surah.verses_count,
			id: surah.id,
		});
	}
	await fs.outputJSON(`src-tauri/data/surah/list/${lang}.json`, finalized, { spaces: 2 });
};

const mergeSurahDetailandInfo = async ({ lang, chapterNumber }: { lang: string; chapterNumber: number; }): Promise<void> => {
	console.log('merging surah', chapterNumber);
	const surahDetail: SurahDetail = await fs.readJSON(`src-tauri/scripts/download/surahs/detail/${chapterNumber}/${lang}.json`);
	const surahInfo: SurahInfo = await fs.readJSON(`src-tauri/scripts/download/surahs/info/${chapterNumber}/${lang}.json`);

	const mergedSurah: CombinedSurah = {
		bismillahPre: surahDetail.bismillah_pre,
		chapterId: surahInfo.chapter_id,
		id: surahDetail.id,
		nameArabic: surahDetail.name_arabic,
		nameComplex: surahDetail.name_complex,
		nameSimple: surahDetail.name_simple,
		revelationPlace: surahDetail.revelation_place,
		reveleationOrder: surahDetail.revelation_order,
		shortText: surahInfo.short_text,
		source: surahInfo.source,
		text: surahInfo.text,
		translatedName: surahDetail.translated_name.name,
		versesCount: surahDetail.verses_count,
	};
	await fs.outputJSON(`src-tauri/data/surah/info/${chapterNumber}/${lang}.json`, mergedSurah, { spaces: 2 });
};

const separateSurahVerses = async ({ lang, chapterNumber }: { lang: string; chapterNumber: number; }): Promise<void> => {
	const surah = await fs.readJSON(`src-tauri/scripts/download/surahs/ayahs/${chapterNumber}/${lang}.json`);
	const startingVerse = surah[0].id;
	const endingVerse = surah[surah.length - 1].id;
	const totalVerses = endingVerse - startingVerse + 1;
	console.log('separateing verses for chapter', chapterNumber, 'verses', totalVerses);
	// put everything except surah.words into a file.
	const singleAyah = surah[0];
	const surahInfoA: AyahTypeNoWords = {
		id: singleAyah.id,
		hizbNumber: singleAyah.hizb_number,
		sajdaNumber: singleAyah.sajda_number,
		verseNumber: singleAyah.verse_number,
		juzNumber: singleAyah.juz_number,
		manzilNumber: singleAyah.manzil_number,
		pageNumber: singleAyah.ruku_number,
		textImlaeiSimple: singleAyah.text_imlaei_simple,
		textIndopak: singleAyah.text_indopak,
		textUthmani: singleAyah.text_uthmani,
		textUthmaniSimple: singleAyah.text_uthmani_simple,
		verseKey: singleAyah.verse_key,
		rubElNumber: singleAyah.rub_el_number,
		rukuNumber: singleAyah.ruku_number,
		startingVerse,
		endingVerse,
		totalVerses,
	};
	await fs.outputJSON(`src-tauri/data/list/${lang}-${chapterNumber}.json`, surahInfoA, { spaces: 2 });

	surah.map(async (singleAyah: AyahTypeNoWords) => {
		const ayah = singleAyah.words;
		const capitalizedAyahKeys: SingleAyah[] = [];
		// @ts-ignore
		ayah.map((ayahWord: AyahWord) => {
			const ayahKey: SingleAyah = {
				id: ayahWord.id,
				position: ayahWord.position,
				audioURL: ayahWord.audio_url,
				charTypeName: ayahWord.char_type_name,
				textUthmani: ayahWord.text_uthmani,
				textUthmaniSimple: ayahWord.text_uthmani_simple,
				textImlaeiSimple: ayahWord.text_imlaei_simple,
				textIndopak: ayahWord.text_indopak,
				text: ayahWord.text,
				lineNumber: ayahWord.line_number,
				pageNumber: ayahWord.page_number,
				translation: ayahWord.translation.text,
				transliteration: ayahWord.transliteration.text,
			};
			capitalizedAyahKeys.push(ayahKey);
		});
		await fs.outputJSON(`src-tauri/data/surah/ayahs/${chapterNumber}/${singleAyah.id}/${lang}.json`, capitalizedAyahKeys, { spaces: 2 });
	});
};

const main = async (): Promise<void> => {
	interface Task {
		chapterNumber: number;
		lang: string;
	}

	const q: queueAsPromised<Task> = fastq.promise(asyncWorker, 2);
	for (let index: number = 1; index <= 114; index++) {
		await q.push({ chapterNumber: index, lang: 'en' });
	}
	async function asyncWorker(arg: Task): Promise<void> {
		const chapterNumber: number = arg.chapterNumber;
		const lang: string = arg.lang || 'en';

		await mergeSurahDetailandInfo({ lang, chapterNumber });
		await separateSurahVerses({ lang, chapterNumber });
	}
	await additionalInfoSurahList({ lang: 'en' });
};

main().catch((error) => console.log(error));
