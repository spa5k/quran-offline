import { fs, invoke } from '@tauri-apps/api';
import { BaseDirectory } from '@tauri-apps/api/fs';

export const getAyahRecitationUrl = async (surahNumber: number, ayahNumber: number, reciter = 'Abdul_Basit_Murattal_64kbps.mp3'): Promise<string> => {
	const ayahFile = await fs.readDir(`data/recitation/${surahNumber}/${ayahNumber}`, { dir: BaseDirectory.Resource });

	console.log('here');
	await invoke('play_recitation', { surahNumber, ayahNumber, reciter });

	return ayahFile[0].path;
};
