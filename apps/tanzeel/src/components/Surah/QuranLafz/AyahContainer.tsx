import { Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Wrap, WrapItem } from '@chakra-ui/react';
import { playOneAyah } from '../../../utils/playOneAyah';
import { Lafz } from '../../../utils/types';
import { LafzDisplay } from './LafzDisplay';

export const AyahContainer = ({ lafz, ayahNumber, surahNumber }: { lafz: Lafz[]; ayahNumber: number; surahNumber: number; }): JSX.Element => {
	const playAudio = async (): Promise<void> => {
		await playOneAyah(surahNumber, ayahNumber);
	};

	return (
		<Popover>
			<PopoverTrigger>
				<WrapItem sx={{ _hover: { background: 'brand.100' } }} p={2}>
					<Wrap>
						{lafz.map((letter) => <LafzDisplay lafz={letter} key={`${letter.id}-${letter.text}`} />)}
					</Wrap>
				</WrapItem>
			</PopoverTrigger>
			<PopoverContent dir='rtl' p={2}>
				<PopoverArrow />
				<PopoverBody dir='rtl'>
					<Button onClick={() => playAudio()}>Play</Button>
					<p>Ayah number - {ayahNumber}</p>
					<p>Surah number - {surahNumber}</p>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};
