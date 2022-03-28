import { Text, WrapItem } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { changeFontAtom } from '../../../state';
import { TypesofFonts } from '../Font/FontChanger';

export const LafzDisplay = ({ lafz }: { lafz: string; }): JSX.Element => {
	const [font] = useAtom<TypesofFonts>(changeFontAtom);

	return (
		<WrapItem flexDir='column' alignItems='center'>
			<Text fontSize='xxx-large' fontFamily={font} sx={{ unicodeBidi: 'bidi-override' }} userSelect='none'>
				{lafz}
			</Text>
		</WrapItem>
	);
};
