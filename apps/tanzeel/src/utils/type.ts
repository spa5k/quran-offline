export type Chapter = {
	id: number;
	name: string;
	transliteration: string;
	translation: string;
	type: Type;
	total_verses: number;
};
export enum Type {
	Meccan = 'meccan',
	Medinan = 'medinan',
}
