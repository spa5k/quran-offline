import { Box, Flex, HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { useAudio } from 'react-use';
import { default as IconPause } from '~icons/carbon/pause';
import { default as IconPlay } from '~icons/carbon/play';
import { currentlyPlayingRecitationUrlsAtom } from '../../state/currentlyPlayingRecitationAtom';
import { isPlayingAtom } from '../../state/isPlayingAtom';
import { recitationQueue } from '../../state/recitationQueue';
import { recitationUrlsAtom } from '../../state/recitationUrlsAtom';

export const AyahPlayer = (): JSX.Element => {
	const [currentRecitation] = useAtom(currentlyPlayingRecitationUrlsAtom);
	const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);
	const [recitationUrls, setRecitationUrls] = useAtom(recitationUrlsAtom);
	const [recitationUrl, setRecitationUrl] = useState<string>('');

	useEffect(() => {
		console.log('bruh');
		setRecitationUrl(recitationUrls[currentRecitation.currentAyah - 1]);
		recitationQueue.empty();
		const queueHander = async () => {
			// get remaining recitationUrls from currentAyah to end of surah
			const remainingRecitationUrls = recitationUrls.slice(currentRecitation.currentAyah - 1);
			console.log(remainingRecitationUrls);
			// add remaining recitationUrls to recitationQueue
			remainingRecitationUrls.forEach((url) => recitationQueue.push({ recitationUrl: url }));
		};
		queueHander().catch((err) => console.log(err));
	}, [currentRecitation.currentAyah]);

	const [audio, state, controls, ref] = useAudio({
		src: recitationUrl,
		autoPlay: isPlaying,
	});

	console.log(audio);

	useEffect(() => {
		const playRecitation = async () => {
			if (isPlaying) {
				await controls.play();
			}
		};
		playRecitation().catch(console.error);
	}, [isPlaying]);

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
					{audio}
					<IconButton children={isPlaying ? <IconPlay /> : <IconPause />} aria-label='play' onClick={() => setIsPlaying(!isPlaying)} />

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
