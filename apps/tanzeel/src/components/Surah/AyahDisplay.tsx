import { Wrap } from '@chakra-ui/react';
import { Ayahs, SingleAyah } from '../../utils/type';
import { AyahLineDisplay } from './AyahLineDisplay';

export const AyahDisplay = ({ ayahs }: { ayahs: Ayahs[]; }): JSX.Element => {
	// extract all ayahs.words into a single array then map through it.
	const ayahArray: SingleAyah[] = [];
	ayahs.forEach((ayah) => {
		if (ayah && ayah.words && ayah.words?.length > 0) {
			ayah.words.forEach((word) => {
				ayahArray.push(word);
			});
		}
	});

	return (
		<Wrap dir='rtl' spacing={7} width={700}>
			{ayahArray.map((ayah) => <AyahLineDisplay ayah={ayah} key={ayah.id} />)}
		</Wrap>
	);
};
