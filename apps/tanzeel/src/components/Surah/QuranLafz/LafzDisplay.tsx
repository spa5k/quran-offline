import { Wrap } from '@chakra-ui/react';
import { Lafz } from '../../../utils/types';
import { AyahLineDisplay } from './AyahDisplay';

export const AyahDisplay = ({ ayahs: lafz }: { ayahs: Lafz[][]; }): JSX.Element => {
	// extract all ayahs.words into a single array then map through it.
	const ayahArray: Lafz[] = [];
	lafz.forEach((ayah) => {
		ayah.forEach((word) => {
			ayahArray.push(word);
		});
	});

	return (
		<Wrap dir='rtl' spacing={7} width={700}>
			{ayahArray.map((lafz) => <AyahLineDisplay lafz={lafz} key={`${lafz.id}-${lafz.text}`} />)}
		</Wrap>
	);
};
