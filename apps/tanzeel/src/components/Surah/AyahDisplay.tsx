import { Wrap } from '@chakra-ui/react';
import { Word } from '../../utils/types';
import { AyahLineDisplay } from './AyahLineDisplay';

export const AyahDisplay = ({ ayahs }: { ayahs: Word[][]; }): JSX.Element => {
	// extract all ayahs.words into a single array then map through it.
	const ayahArray: Word[] = [];
	ayahs.forEach((ayah) => {
		ayah.forEach((word) => {
			ayahArray.push(word);
		});
	});

	return (
		<Wrap dir='rtl' spacing={7} width={700}>
			{ayahArray.map((ayah) => <AyahLineDisplay ayah={ayah} key={ayah.id} />)}
		</Wrap>
	);
};
