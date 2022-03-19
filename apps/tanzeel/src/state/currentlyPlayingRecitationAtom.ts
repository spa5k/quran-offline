import { atomWithStorage } from 'jotai/utils';

export const currentAyahAtom = atomWithStorage<number>('currentAyah', 0);
export const currentSurahAtom = atomWithStorage<number>('currentSurah', 0);
export const isCurrentAyahPlayedAtom = atomWithStorage<boolean>('isCurrentAyahPlayed', false);
