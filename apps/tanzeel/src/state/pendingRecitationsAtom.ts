import { atomWithStorage } from 'jotai/utils';

export const pendingRecitationsAtom = atomWithStorage<string[]>('pendingRecitationsAtom', []);
