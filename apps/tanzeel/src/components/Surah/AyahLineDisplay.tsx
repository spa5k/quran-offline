import { chakra, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { Ayahs } from '../../utils/type';

export const AyahLineDisplay = ({ ayah: ayahLine }: { ayah: Ayahs; }): JSX.Element => (
	<VStack flexDir='row-reverse' justifyContent='flex-start' spacing={19}>
		<HStack flexDir='row-reverse' spacing={19}>
			{ayahLine.words?.map((word) => (
				<Flex flexDir='column' alignItems='flex-end'>
					<Text fontSize='xxx-large' fontFamily='UthmanicHafs'>
						{word.text_indopak}
					</Text>
					<chakra.span>{word.translation?.text}</chakra.span>
				</Flex>
			))}
		</HStack>
	</VStack>
);
