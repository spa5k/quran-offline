import { join, resourceDir } from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { ayahCountList } from './ayahCount';

export const getAllAyahsRecitationUrl = async (surahNumber: number, reciter = 'Abdul_Basit_Murattal_64kbps.mp3'): Promise<string[]> => {
  const resourceDirPath = await resourceDir();

  // get Ayah Count for the specific surah
  const ayahCount = ayahCountList[surahNumber - 1];

  const urls: string[] = [];
  // if first 4 letters of resourceDirPath are "\\?\", remove it
  const resourceDirPathWithoutPrefix = resourceDirPath.replace(/^\\\\\?\\/, '');
  for (let index = 1; index <= ayahCount; index++) {
    const allowedPath = convertFileSrc(
      await join(resourceDirPathWithoutPrefix, 'data', 'recitation', surahNumber.toString(), index.toString(), 'Abdul_Basit_Murattal_64kbps.mp3'),
    );
    urls.push(allowedPath);
  }

  return urls;
};
