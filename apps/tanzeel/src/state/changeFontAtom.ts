import { atomWithStorage } from 'jotai/utils';
import { TypesofFonts } from '../components/Surah';

// Set the string key and the initial value
export const changeFontAtom = atomWithStorage('font', TypesofFonts?.Uthmani || 'Uthmanic');
