import fastq, { queueAsPromised } from 'fastq';
import fs from 'fs-extra';
import { $fetch } from 'ohmyfetch';

export const downloadAllAyahsBySurah = async ({ lang }: { lang: string; }): Promise<void> => {
  interface Task {
    chapterNumber: number;
    lang: string;
  }

  const q: queueAsPromised<Task> = fastq.promise(asyncWorker, 2);
  for (let index: number = 1; index <= 114; index++) {
    await q.push({ chapterNumber: index, lang });
  }

  async function asyncWorker(arg: Task): Promise<void> {
    const chapterNumber: number = arg.chapterNumber;

    // first check if the chapter has already been downloaded -
    // if it has, then skip it
    // eslint-disable-next-line @typescript-eslint/typedef
    const downloadedChapter = await fs.pathExists(`src-tauri/scripts/download/surahs/ayahs/${chapterNumber}/${lang}.json`);

    if (!downloadedChapter) {
      // eslint-disable-next-line @typescript-eslint/typedef
      const chapterInfo = await $fetch(
        `https://api.quran.com/api/v4/verses/by_chapter/${chapterNumber}?language=${arg.lang}&words=true&translations=true&tafsirs=true&word_fields=text_uthmani%2Ctext_uthmani_simple%2Ctext_imlaei_simple%2Ctext_indopak&fields=text_uthmani%2Ctext_uthmani_simple%2Ctext_imlaei_simple%2Ctext_indopak&page=1&per_page=1000`,
        { method: 'GET' },
      );
      await fs.outputJSON(`src-tauri/scripts/download/surahs/ayahs/${chapterNumber}/${lang}.json`, chapterInfo.verses, { spaces: 2 });

      console.log(`Downloaded ayahs for surah ${chapterNumber} lang - ${lang}`);
    } else {
      console.log(`Already have ayahs for surah - ${chapterNumber} lang - ${lang}`);
    }
  }
};
