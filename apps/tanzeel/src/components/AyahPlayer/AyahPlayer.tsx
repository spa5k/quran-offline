import { Box, Flex, HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import IconPause from '~icons/carbon/pause';
import { default as IconPlay } from '~icons/carbon/play';
import { ayahPlayerAtom } from '../../state/ayahPlayerAtom';

export const AyahPlayer = (): JSX.Element => {
	const [ayahStatus] = useAtom(ayahPlayerAtom);
	console.log('ayah', ayahStatus);

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
					<IconButton children={ayahStatus.isPlaying ? <IconPause /> : <IconPlay />} aria-label='nice' />

					<Text userSelect='none'>
						Current Ayah - {ayahStatus.currentAyah}
					</Text>
					<Text userSelect='none'>
						Current Surah - {ayahStatus.currentSurah}
					</Text>
				</HStack>
			</Box>
		</Flex>
	);
};
