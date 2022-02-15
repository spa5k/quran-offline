import { getSingleAyah } from './getSingleAyah';
import { Lafz } from './types';

export const getAyahsPagination = async (perPage: number, surahNumber: number, maxAyahs: number, currentStartingVerse: number): Promise<Lafz[][]> => {
	const Ayah: Lafz[][] = [];
	console.log(`Getting Ayahs from ${currentStartingVerse} to ${currentStartingVerse + perPage}`);

	const numberOfAyahsToGet: number = maxAyahs % perPage;
	for (let i: number = currentStartingVerse; i < currentStartingVerse + numberOfAyahsToGet; i++) {
		// check if the ayah we are getting is more than maxAyahs
		if (i > maxAyahs) {
			break;
		}
		const ayah: Lafz[] = await getSingleAyah(surahNumber, i);

		Ayah.push(ayah);
	}
	return Ayah;
};
