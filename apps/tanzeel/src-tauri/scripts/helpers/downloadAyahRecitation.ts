import fastq, { queueAsPromised } from 'fastq';
import fs from 'fs-extra';
import { $fetch } from 'ohmyfetch';
import { ayahCount } from '../recitations';

interface downloadAyahRecitationProps {
	reciter: string;
}
export const downloadAyahRecitation = async ({ reciter }: downloadAyahRecitationProps): Promise<void> => {
	const baseUrl = 'https://www.everyayah.com/data';
	if (!reciter) {
		reciter = 'Abdul_Basit_Mujawwad_128kbps';
	}
	const finalUrl = `${baseUrl}/${reciter}.mp3`;

	// get the list of ayahs in every chapter
	const ayahNumber = ayahCount;

	interface Task {
		createdUrl: string;
		chapterNumber: number;
		ayahNumber: number;
	}

	const q: queueAsPromised<Task> = fastq.promise(asyncWorker, 8);

	for (let index = 1; index <= 114; index++) {
		// iterate over ayahNumber and push to queue like 1 to 001, 111 to 111;
		for (let i: number = 1; i <= ayahNumber[index - 1]; i++) {
			const chapterNumber: number = index;
			const ayahNumber: number = i;
			// if ayahNumber is 1, set it to 001
			const ayahNumberString = ayahNumber < 10 ? `00${ayahNumber}` : ayahNumber < 100 ? `0${ayahNumber}` : ayahNumber;
			// if chapter number is 1, set it to 001
			const chapterNumberString = chapterNumber < 10 ? `00${chapterNumber}` : chapterNumber < 100 ? `0${chapterNumber}` : chapterNumber;
			const createdUrl = `${baseUrl}/${reciter}/${chapterNumberString}${ayahNumberString}.mp3`;

			await q.push({ createdUrl, ayahNumber, chapterNumber });
		}
	}
	async function asyncWorker(arg: Task): Promise<void> {
		const createdUrl: string = arg.createdUrl;
		const chapterNumber: number = arg.chapterNumber;
		const ayahNumber: number = arg.ayahNumber;
		console.log('Downloading recitation for ayah', createdUrl);

		// first check if the chapter has already been downloaded -
		const downloadedAyah: boolean = await fs.pathExists(`src-tauri/data/recitation/${chapterNumber}/${ayahNumber}/${reciter}.mp3`);
		// if it has, then skip it
		if (!downloadedAyah) {
			const ayah = await $fetch(
				createdUrl,
				{ method: 'GET', responseType: 'arrayBuffer' },
			);
			// change to buffer
			const ayahBuffer = Buffer.from(ayah);
			await fs.outputFile(`src-tauri/data/recitation/${chapterNumber}/${ayahNumber}/${reciter}.mp3`, ayahBuffer);
			console.log(`Downloaded recitation for ayah ${chapterNumber} ${ayahNumber} lang - ${reciter}`);
		} else {
			console.log(`Already have recitation for ayah ${chapterNumber} ${ayahNumber} lang - ${reciter}`);
		}
		// console.log(arg);
	}
};
