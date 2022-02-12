import { chakra, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { Ayahs } from '../../utils/type';

export const AyahLineDisplay = ({ ayah: ayahLine }: { ayah: Ayahs; }): JSX.Element => (
	<VStack spacing={30}>
		<Wrap spacing={5} dir='rtl' alignItems='flex-end'>
			{ayahLine.words?.map((word) => (
				<WrapItem flexDir='column' key={`word-${word.id}`} alignItems='center'>
					<Text fontSize='xxx-large' fontFamily='UthmanicHafs'>
						{word.text_indopak}
					</Text>
					<chakra.span fontSize='sm'>{word.translation?.text}</chakra.span>
				</WrapItem>
			))}
		</Wrap>
	</VStack>
);
