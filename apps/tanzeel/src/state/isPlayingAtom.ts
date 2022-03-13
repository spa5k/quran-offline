import { atomWithStorage } from 'jotai/utils';

export const isPlayingAtom = atomWithStorage<boolean>('isPlaying', false);
