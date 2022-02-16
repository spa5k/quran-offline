import { chakra, Text, WrapItem } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { changeFontAtom } from '../../../state/changeFontAtom';
import { Lafz } from '../../../utils/types';
import { TypesofFonts } from '../Font/FontChanger';

export const AyahLineDisplay = ({ lafz }: { lafz: Lafz; }): JSX.Element => {
	const [font] = useAtom<TypesofFonts>(changeFontAtom);
	console.log('font', font);
	return (
		<WrapItem flexDir='column' alignItems='center'>
			{lafz.charTypeName === 'end'
				&& <Text fontFamily='UthmanicHafs' fontSize='xxx-large'>{lafz.textUthmani}</Text>}
			{lafz.charTypeName === 'word' && (
				<Text fontSize='xxx-large' fontFamily={`${font}`} sx={{ unicodeBidi: 'bidi-override' }}>
					{font === TypesofFonts.Uthmani ? lafz.textUthmani : lafz.textIndopak}
				</Text>
			)}

			<chakra.span>{lafz.translation}</chakra.span>
		</WrapItem>
	);
};
