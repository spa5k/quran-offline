import { Box, Flex, HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useAudio } from 'react-awesome-audio';
import { default as IconPause } from '~icons/carbon/pause';
import { default as IconPlay } from '~icons/carbon/play';
import { currentAyahAtom, currentSurahAtom } from '../../state/currentlyPlayingRecitationAtom';
import { recitationUrlsAtom } from '../../state/recitationUrlsAtom';
import { ayahCountList } from '../../utils/ayahCount';
import { getAllAyahsRecitationUrl } from '../../utils/getAllAyahRecitationUrl';

export const AyahPlayer = (): JSX.Element => {
	const [recitationUrls, setRecitationUrls] = useAtom(recitationUrlsAtom);
	const [currentAyah, setCurrentAyah] = useAtom(currentAyahAtom);
	const [currentSurah] = useAtom(currentSurahAtom);

	useEffect(() => {
		const gettingUrls = async (): Promise<void> => {
			const getAllRecitationUrls = async (): Promise<void> => {
				const urls = await getAllAyahsRecitationUrl(currentSurah);
				setRecitationUrls(urls);
			};

			await getAllRecitationUrls();
		};
		gettingUrls().catch((err) => console.log(err));
	}, [currentSurah]);

	const { isPlaying, play, toggle } = useAudio({
		src: recitationUrls[currentAyah - 1],
		onEnded: () => {
			const totalAyahs = ayahCountList[currentSurah - 1];
			if (currentAyah < totalAyahs) {
				setCurrentAyah(currentAyah + 1);
			}
		},
	});

	// whenever currentRecitation.currentAyah changes, play again
	useEffect(() => {
		play();
	}, [currentAyah]);

	return (
		<Flex
			position='sticky'
			bottom='0'
			transition='0.3s '
			bg={useColorModeValue('#F9FAFB', 'gray.600')}
			p={2}
			w='full'
			alignItems='center'
			justifyContent='center'
		>
			<Box
				mx='auto'
				px={4}
				py={4}
				rounded='lg'
				shadow='lg'
				bg={useColorModeValue('white', 'gray.800')}
				maxW='2xl'
			>
				<HStack>
					<IconButton
						children={isPlaying
							? <IconPause />
							: <IconPlay />}
						aria-label='pause'
						onClick={toggle}
					/>
					<Text userSelect='none'>
						Current Ayah - {currentAyah}
					</Text>
					<Text userSelect='none'>
						Current Surah - {currentSurah}
					</Text>
				</HStack>
			</Box>
		</Flex>
	);
};
