import { chakra, Text, WrapItem } from '@chakra-ui/react';
import { Word } from '../../utils/types';

export const AyahLineDisplay = ({ ayah }: { ayah: Word; }): JSX.Element => (
	<WrapItem flexDir='column' alignItems='center'>
		<Text fontSize='xxx-large' fontFamily='IndoPak'>
			{ayah.textIndopak}
		</Text>
		<chakra.span>{ayah.translation}</chakra.span>
	</WrapItem>
);
