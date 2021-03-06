import { Wrap } from '@chakra-ui/react';
import { Lafz } from '../../../utils';
import { AyahContainer } from './AyahContainer';

export const AyahDisplay = ({ ayahs, surahNumber }: { ayahs: Lafz[][]; surahNumber: number; }): JSX.Element => (
	<Wrap dir='rtl' spacing={7} width={800} flexDir='row' my={4}>
		{ayahs.map((ayah, index) => <AyahContainer ayahNumber={index + 1} lafz={ayah} key={`${index + 1}`} surahNumber={surahNumber} />)}
	</Wrap>
);
