import { chakra, Text, WrapItem } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { changeFontAtom } from '../../../state';
import { Lafz } from '../../../utils';
import { TypesofFonts } from '../Font/FontChanger';

export const LafzDisplay = ({ lafz }: { lafz: Lafz; }): JSX.Element => {
	const [font] = useAtom<TypesofFonts>(changeFontAtom);

	return (
		<WrapItem flexDir='column' alignItems='center'>
			{lafz.charTypeName === 'end'
				&& <Text fontFamily='UthmanicHafs' fontSize='xxx-large' userSelect='none'>{lafz.textUthmani}</Text>}
			{lafz.charTypeName === 'word' && (
				<Text fontSize='xxx-large' fontFamily={font} sx={{ unicodeBidi: 'bidi-override' }} userSelect='none'>
					{font === TypesofFonts.Uthmani && lafz.textUthmani}
					{font === TypesofFonts.IndoPak && lafz.textIndopak}
				</Text>
			)}

			<chakra.span>{lafz.translation}</chakra.span>
		</WrapItem>
	);
};
