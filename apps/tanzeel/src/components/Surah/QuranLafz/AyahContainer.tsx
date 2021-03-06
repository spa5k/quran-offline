import {
	Button,
	ButtonGroup,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	useColorMode,
	VStack,
	Wrap,
	WrapItem,
} from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React from 'react';
import { currentAyahAtom, currentSurahAtom } from '../../../state';
import { Lafz } from '../../../utils';
import { LafzDisplay } from './LafzDisplay';

export const AyahContainer = React.memo(({ lafz, ayahNumber, surahNumber }: { lafz: Lafz[]; ayahNumber: number; surahNumber: number; }): JSX.Element => {
	const { colorMode } = useColorMode();
	const [currentAyah, setCurrentAyah] = useAtom(currentAyahAtom);
	const [, setCurrentSurah] = useAtom(currentSurahAtom);

	const updateCurrentRecitation = (): void => {
		setCurrentAyah(ayahNumber);
		setCurrentSurah(surahNumber);
	};

	const bgColor = colorMode === 'dark' ? 'quran.700' : 'brand.100';
	return (
		<Popover>
			<PopoverTrigger>
				<WrapItem
					sx={{ _hover: { background: bgColor } }}
					p={2}
					bg={currentAyah === ayahNumber ? bgColor : 'none'}
				>
					<Wrap>
						{lafz.map((letter) => <LafzDisplay lafz={letter} key={`${letter.id}-${letter.text}`} />)}
					</Wrap>
				</WrapItem>
			</PopoverTrigger>
			<PopoverContent dir='rtl' p={2}>
				<PopoverArrow />
				<PopoverBody dir='rtl'>
					<VStack>
						<ButtonGroup>
							<Button onClick={() => updateCurrentRecitation()}>Play</Button>
							<Button>Pause</Button>
						</ButtonGroup>

						<p>Ayah number - {ayahNumber}</p>
						<p>Surah number - {surahNumber}</p>
					</VStack>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
});
