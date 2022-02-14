import { chakra, Text, WrapItem } from '@chakra-ui/react';
import { Lafz } from '../../utils/types';

export const AyahLineDisplay = ({ ayah }: { ayah: Lafz; }): JSX.Element => (
	<WrapItem flexDir='column' alignItems='center'>
		<Text fontSize='xxx-large' fontFamily='IndoPak'>
			{ayah.textIndopak}
		</Text>
		<chakra.span>{ayah.translation}</chakra.span>
	</WrapItem>
);
