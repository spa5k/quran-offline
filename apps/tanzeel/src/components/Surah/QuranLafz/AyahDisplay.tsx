import { Wrap } from '@chakra-ui/react';
import { Lafz } from '../../../utils/types';
import { LafzDisplay } from './LafzDisplay';

export const AyahDisplay = ({ ayahs: lafz }: { ayahs: Lafz[][]; }): JSX.Element => {
	// extract all ayahs.words into a single array then map through it.
	const ayahArray: Lafz[] = [];
	lafz.forEach((ayah) => {
		ayah.forEach((word) => {
			ayahArray.push(word);
		});
	});

	return (
		<Wrap dir='rtl' spacing={7} width={900}>
			{ayahArray.map((lafz) => <LafzDisplay lafz={lafz} key={`${lafz.id}-${lafz.text}`} />)}
		</Wrap>
	);
};
