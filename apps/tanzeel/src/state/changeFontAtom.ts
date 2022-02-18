import { atomWithStorage } from 'jotai/utils';
import { TypesofFonts } from '../components/Surah/Font/FontChanger';

// Set the string key and the initial value
export const changeFontAtom = atomWithStorage('darkMode', TypesofFonts?.Uthmani || 'UthmanicHafs');
