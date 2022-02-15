import { chakra, Text, WrapItem } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { changeFontAtom } from '../../state/changeFontAtom';
import { Lafz } from '../../utils/types';

export const AyahLineDisplay = ({ ayah }: { ayah: Lafz; }): JSX.Element => {
	const [font] = useAtom(changeFontAtom);
	return (
		<WrapItem flexDir='column' alignItems='center'>
			<Text fontSize='xxx-large' fontFamily={font}>
				{ayah.textIndopak}
			</Text>
			<chakra.span>{ayah.translation}</chakra.span>
		</WrapItem>
	);
};
