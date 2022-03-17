import { Box, Flex, HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { default as IconPause } from '~icons/carbon/pause';
import { default as IconPlay } from '~icons/carbon/play';
import { currentRecitationAtom } from '../../state/currentlyPlayingRecitationAtom';
import { isPlayingAtom } from '../../state/isPlayingAtom';
import { pendingRecitationsAtom } from '../../state/pendingRecitationsAtom';
import { recitationUrlsAtom } from '../../state/recitationUrlsAtom';
import { getAllAyahsRecitationUrl } from '../../utils/getAllAyahRecitationUrl';
import { useMultipleAudioHook } from '../../utils/useMultipleAudioHook';

export const AyahPlayer = (): JSX.Element => {
	const [currentRecitation, setCurrentRecitation] = useAtom(currentRecitationAtom);
	const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
	const [recitationUrls, setRecitationUrls] = useAtom(recitationUrlsAtom);
	const [pendingRecitation, setPendingRecitations] = useAtom(pendingRecitationsAtom);

	// get all the recitationUrls for this surah // use useEffect

	useEffect(() => {
		const gettingUrls = async (): Promise<void> => {
			const getAllRecitationUrls = async (): Promise<void> => {
				const urls = await getAllAyahsRecitationUrl(currentRecitation.currentSurah);
				setRecitationUrls(urls);
			};

			await getAllRecitationUrls();
		};
		gettingUrls().catch((err) => console.log(err));
	}, [currentRecitation.currentAyah]);

	// extract pending recitationUrls from recitationUrls and set pendingRecitation
	useEffect(() => {
		const extractPendingRecitation = (): void => {
			// copy recitationUrls to a new array
			const newRecitationUrls = [...recitationUrls];
			// use ayahNumber as index and remove all urls that have index lesser than equal to currentAyah
			newRecitationUrls.splice(0, currentRecitation.currentAyah - 1);
			setPendingRecitations(newRecitationUrls);
		};
		extractPendingRecitation();
	}, [recitationUrls]);

	const { isPlaying: isPlaying2, pause, play, toggle } = useMultipleAudioHook(recitationUrls[currentRecitation.currentAyah - 1]);

	useEffect(() => {
		return () => {
			play();
		};
	}, [currentRecitation.currentAyah]);

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
						children={<IconPause />}
						aria-label='pause'
						onClick={() => {
							toggle();
						}}
					/>

					{isPlaying2
						? (
							<IconButton
								children={<IconPause />}
								aria-label='pause'
								onClick={() => {
									pause();
								}}
							/>
						)
						: (
							<IconButton
								children={<IconPlay />}
								aria-label='play'
								onClick={() => {
									play();
								}}
							/>
						)}

					{/* {audio} */}
					<Text userSelect='none'>
						Current Ayah - {currentRecitation.currentAyah}
					</Text>
					<Text userSelect='none'>
						Current Surah - {currentRecitation.currentSurah}
					</Text>
				</HStack>
			</Box>
		</Flex>
	);
};
