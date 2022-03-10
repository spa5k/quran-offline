import { join, resourceDir } from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';

export const getAyahRecitationUrl = async (surahNumber: number, ayahNumber: number, reciter = 'Abdul_Basit_Murattal_64kbps.mp3'): Promise<string> => {
	const resourceDirPath = await resourceDir();

	// if first 4 letters of resourceDirPath are "\\?\", remove it
	const resourceDirPathWithoutPrefix = resourceDirPath.replace(/^\\\\\?\\/, '');

	const allowedPath = convertFileSrc(
		await join(resourceDirPathWithoutPrefix, 'data', 'recitation', surahNumber.toString(), ayahNumber.toString(), 'Abdul_Basit_Murattal_64kbps.mp3'),
	);

	return allowedPath;
};
