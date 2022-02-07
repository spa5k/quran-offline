export enum Type {
	Meccan = 'meccan',
	Medinan = 'medinan',
}

export type Chapter = {
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

export type QuranPart = {
	chapter: number;
	verse: number;
	text: string;
};
// type quran have index string and the value is an array of QuranPart
export type Quran = {
	[index: string]: QuranPart[];
};

export type Verse = {
	id: number;
	text: string;
	translation: string;
	transliteration: string;
};

export type Translation = {
	[index: string]: Chapter[];
};
