export type Chapters = {
	id: number;
	verse_number: number;
	verse_key: string;
	juz_number: number;
	hizb_number: number;
	rub_el_hizb_number: number;
	ruku_number: number;
	manzil_number: number;
	sajdah_number: null;
	text_uthmani: string;
	text_uthmani_simple: string;
	text_imlaei_simple: string;
	text_indopak: string;
	page_number: number;
	words: Word[];
};

export type Word = {
	id: number;
	position: number;
	audio_url: null | string;
	char_type_name: CharTypeName;
	text_uthmani: string;
	text_uthmani_simple: string;
	text_imlaei_simple: string;
	text_indopak: string;
	page_number: number;
	line_number: number;
	text: string;
	translation: Translation;
	transliteration: Translation;
};

export enum CharTypeName {
	End = 'end',
	Word = 'word',
}

export type Translation = {
	text: null | string;
	language_name: LanguageName;
};

export enum LanguageName {
	English = 'english',
}
