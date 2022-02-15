export interface Lafz {
	id?: number;
	position?: number;
	audioURL?: null | string;
	charTypeName?: string;
	textUthmani?: string;
	textUthmaniSimple?: string;
	textImlaeiSimple?: string;
	textIndopak?: string;
	text?: string;
	lineNumber?: number;
	pageNumber?: number;
	translation?: string;
	transliteration?: null | string;
}

export interface Ayah {
	id?: number;
	hizbNumber?: number;
	verseNumber?: number;
	juzNumber?: number;
	manzilNumber?: number;
	pageNumber?: number;
	textImlaeiSimple?: string;
	textIndopak?: string;
	textUthmani?: string;
	textUthmaniSimple?: string;
	verseKey?: string;
	rukuNumber?: number;
	startingVerse: number;
	endingVerse: number;
	totalVerses?: number;
	lafz?: Lafz[];
}

export interface SurahInfo {
	bismillahPre?: boolean;
	chapterID?: number;
	id?: number;
	nameArabic?: string;
	nameComplex?: string;
	nameSimple?: string;
	revelationPlace?: string;
	reveleationOrder?: number;
	shortText?: string;
	source?: string;
	text?: string;
	translatedName?: string;
	versesCount?: number;
}

export type SurahList = Surah[];

export interface Surah {
	bismillahPre?: boolean;
	endingVerse?: number;
	nameArabic?: string;
	nameComplex?: string;
	nameSimple?: string;
	revelationOrder?: number;
	revelationPlace?: RevelationPlace;
	startingVerse?: number;
	totalVerses?: number;
	translatedName?: string;
	versesCount?: number;
	id: number;
}

export enum RevelationPlace {
	Madinah = 'madinah',
	Makkah = 'makkah',
}
