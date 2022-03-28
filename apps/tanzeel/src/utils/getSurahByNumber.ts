import { invoke } from '@tauri-apps/api';
import { getSurahInfo } from './getSurahInfo';
import { SurahInfo } from './types';
import { Ayah2 } from './typesV2';

export const getSurahByNumber = async (number: number): Promise<{
	surahInfo: SurahInfo;
	ayahs: Ayah2[];
}> => {
	let ayahs: Ayah2[] = [];
	try {
		console.log('invoking get_all_ayahs');
		const data: { ayah: Ayah2[]; } = await invoke('get_all_ayahs', { surahNumber: number });
		ayahs = data.ayah as Ayah2[];
		console.log(data);
	} catch (err) {
		console.log(err);
	}

	const surahInfo: SurahInfo = await getSurahInfo(number);

	return { surahInfo, ayahs };
};
