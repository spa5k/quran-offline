import { chakra, Text, WrapItem } from '@chakra-ui/react';
import { SingleAyah } from '../../utils/type';

export const AyahLineDisplay = ({ ayah }: { ayah: SingleAyah; }): JSX.Element => (
	<WrapItem flexDir='column' alignItems='center'>
		<Text fontSize='xxx-large' fontFamily='IndoPak'>
			{ayah.text_indopak}
		</Text>
		<chakra.span>{ayah.translation?.text}</chakra.span>
	</WrapItem>
	// <VStack spacing={30}>
	// 	<p>{ayahLine.id}</p>
	// 	<Wrap spacing={5} dir='rtl' alignItems='flex-end'>
	// 		{ayahLine.words?.map((word) => (
	// 			<WrapItem flexDir='column' key={`word-${word.id}`} alignItems='center'>
	// 				<Text fontSize='xxx-large' fontFamily='UthmanicHafs'>
	// 					{word.text_indopak}
	// 				</Text>
	//
	// 			</WrapItem>
	// 		))}
	// 	</Wrap>
	// </VStack>
);
