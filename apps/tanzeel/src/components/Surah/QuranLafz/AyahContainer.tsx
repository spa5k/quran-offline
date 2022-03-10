import { Button, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger, Wrap, WrapItem } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { useAudio } from 'react-use';
import { ayahPlayerAtom } from '../../../state/ayahPlayerAtom';
import { getAyahRecitationUrl } from '../../../utils/getAyahRecitationUrl';
import { Lafz } from '../../../utils/types';
import { LafzDisplay } from './LafzDisplay';

export const AyahContainer = React.memo(({ lafz, ayahNumber, surahNumber }: { lafz: Lafz[]; ayahNumber: number; surahNumber: number; }): JSX.Element => {
	const [, setAyahStatus] = useAtom(ayahPlayerAtom);
	const [ayahUrl, setAyahUrl] = useState<string>('');
	const [audio, state, controls, ref] = useAudio({
		src: ayahUrl ? ayahUrl : '',
		autoPlay: false,
	});

	const playAudio = async (): Promise<void> => {
		setAyahStatus({ currentAyah: ayahNumber, currentSurah: surahNumber, isPlaying: true, lastAyah: ayahNumber - 1 > 0 ? ayahNumber - 1 : 1 });
		// await playOneAyah(surahNumber, ayahNumber);
		await controls.play();
		setAyahStatus({ currentAyah: ayahNumber, currentSurah: surahNumber, isPlaying: false, lastAyah: ayahNumber - 1 > 0 ? ayahNumber - 1 : 1 });
	};

	useEffect(() => {
		const ayahRecitation = async (): Promise<void> => {
			const url = await getAyahRecitationUrl(surahNumber, ayahNumber);
			setAyahUrl(url);
		};
		ayahRecitation().catch((err) => console.log(err));
	}, []);

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
					{audio}

					<ButtonGroup>
						<Button onClick={() => playAudio()}>Play</Button>
						<Button onClick={controls.pause}>Pause</Button>
					</ButtonGroup>

					<p>Ayah number - {ayahNumber}</p>
					<p>Surah number - {surahNumber}</p>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
});
