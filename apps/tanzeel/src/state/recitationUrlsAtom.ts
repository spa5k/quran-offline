import { atomWithStorage } from 'jotai/utils';

export const recitationUrlsAtom = atomWithStorage<string[]>('recitationUrls', []);
