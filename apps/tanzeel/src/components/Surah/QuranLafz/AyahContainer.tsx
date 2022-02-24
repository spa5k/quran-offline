import { Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Wrap, WrapItem } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React from 'react';
import { ayahPlayerAtom } from '../../../state/ayahPlayerAtom';
import { playOneAyah } from '../../../utils/playOneAyah';
import { Lafz } from '../../../utils/types';
import { LafzDisplay } from './LafzDisplay';

// memoize this components

export const AyahContainer = React.memo(({ lafz, ayahNumber, surahNumber }: { lafz: Lafz[]; ayahNumber: number; surahNumber: number; }): JSX.Element => {
	const [, setAyahStatus] = useAtom(ayahPlayerAtom);

	const playAudio = async (): Promise<void> => {
		setAyahStatus({ currentAyah: ayahNumber, currentSurah: surahNumber, isPlaying: true, lastAyah: ayahNumber - 1 > 0 ? ayahNumber - 1 : 1 });
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
});
