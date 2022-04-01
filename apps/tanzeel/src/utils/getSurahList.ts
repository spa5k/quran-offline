import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs';
import { Surah } from './types';

export const getSurahList = async (): Promise<Surah[]> => {
  const response: string = await readTextFile('data/surah/list/en.json', { dir: BaseDirectory.Resource });

  const parsedData: Surah[] = JSON.parse(response);
  return parsedData;
};
