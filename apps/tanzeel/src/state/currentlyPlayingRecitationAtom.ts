import { atomWithStorage } from 'jotai/utils';

interface CurrentlyPlayingRecitationAtom {
	currentAyah: number;
	currentSurah: number;
}

export const currentlyPlayingRecitationUrlsAtom = atomWithStorage<CurrentlyPlayingRecitationAtom>('isPlaying', {
	currentAyah: 0,
	currentSurah: 0,
});
