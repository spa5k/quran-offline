import { atomWithStorage } from 'jotai/utils';

interface RecitationStatus {
	isPlaying: boolean;
	lastAyah: number;
	currentAyah: number;
	currentSurah: number;
}

// Set the string key and the initial value
export const ayahPlayerAtom = atomWithStorage<RecitationStatus>('recitation', { currentAyah: 0, currentSurah: 0, isPlaying: false, lastAyah: 0 });
