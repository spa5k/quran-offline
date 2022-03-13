import { Button, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Wrap, WrapItem } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { currentlyPlayingRecitationUrlsAtom } from '../../../state/currentlyPlayingRecitationAtom';
import { isPlayingAtom } from '../../../state/isPlayingAtom';
import { recitationUrlsAtom } from '../../../state/recitationUrlsAtom';
import { Lafz } from '../../../utils/types';
import { LafzDisplay } from './LafzDisplay';

export const AyahContainer = React.memo(({ lafz, ayahNumber, surahNumber }: { lafz: Lafz[]; ayahNumber: number; surahNumber: number; }): JSX.Element => {
	const [currentRecitation, setCurrentRecitation] = useAtom(currentlyPlayingRecitationUrlsAtom);
	const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
	const [recitationUrls, setRecitationUrls] = useAtom(recitationUrlsAtom);
	const [recitationUrl, setRecitationUrl] = useState<string>('');

	const getRecitationUrl = (): void => {
		setRecitationUrl(recitationUrls[ayahNumber - 1]);
	};

	const updateCurrentRecitation = (): void => {
		setIsPlaying(true);
		setCurrentRecitation({
			currentAyah: ayahNumber,
			currentSurah: surahNumber,
		});
		getRecitationUrl();
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
					<ButtonGroup>
						<Button onClick={() => updateCurrentRecitation()}>Play</Button>
						<Button>Pause</Button>
					</ButtonGroup>

					<p>Ayah number - {ayahNumber}</p>
					<p>Surah number - {surahNumber}</p>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
});
