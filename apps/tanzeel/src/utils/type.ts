/* eslint-disable @rushstack/no-new-null */
/* eslint-disable @typescript-eslint/naming-convention */
// Surah/Info
export type SurahInfo = {
	id?: number;
	chapter_id?: number;
	language_name?: string;
	short_text?: string;
	source?: string;
	text?: string;
};

// Surah/list
export type SurahList = {
	id?: number;
	revelation_place?: RevelationPlace;
	revelation_order?: number;
	bismillah_pre?: boolean;
	name_simple?: string;
	name_complex?: string;
	name_arabic?: string;
	verses_count?: number;
	pages?: number[];
	translated_name?: TranslatedName;
};

export enum RevelationPlace {
	Madinah = 'madinah',
	Makkah = 'makkah',
}

export type TranslatedName = {
	language_name?: LanguageName;
	name?: string;
};

export enum LanguageName {
	English = 'english',
}

// Surah/Ayahs
export type Surah = {
	id?: number;
	verse_number?: number;
	verse_key?: string;
	juz_number?: number;
	hizb_number?: number;
	rub_el_hizb_number?: number;
	ruku_number?: number;
	manzil_number?: number;
	sajdah_number?: null;
	text_uthmani?: string;
	text_uthmani_simple?: string;
	text_imlaei_simple?: string;
	text_indopak?: string;
	page_number?: number;
	words?: Ayah[];
};

export type Ayah = {
	id?: number;
	position?: number;
	audio_url?: null | string;
	char_type_name?: CharTypeName;
	text_uthmani?: string;
	text_uthmani_simple?: string;
	text_imlaei_simple?: string;
	text_indopak?: string;
	page_number?: number;
	line_number?: number;
	text?: string;
	translation?: Translation;
	transliteration?: Translation;
};

export enum CharTypeName {
	End = 'end',
	Word = 'word',
}

export type Translation = {
	text?: null | string;
	language_name?: LanguageName;
};

// Surah/Detail
export type SurahDetail = {
	id?: number;
	revelation_place?: string;
	revelation_order?: number;
	bismillah_pre?: boolean;
	name_simple?: string;
	name_complex?: string;
	name_arabic?: string;
	verses_count?: number;
	pages?: number[];
	translated_name?: TranslatedName;
};
