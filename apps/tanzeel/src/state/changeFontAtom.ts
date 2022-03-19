import { TypesofFonts } from '@components';
import { atomWithStorage } from 'jotai/utils';

// Set the string key and the initial value
export const changeFontAtom = atomWithStorage('font', TypesofFonts?.Uthmani || 'Uthmanic');
