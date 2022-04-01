import { Flex, Text, WrapItem } from '@chakra-ui/react';
import { toArabicDigit } from 'arabic-digits-converter';
import { useAtom } from 'jotai';
import { changeFontAtom } from '../../../state';
import { TypesofFonts } from '../Font/FontChanger';

export const LafzDisplay = ({ lafz, ayahNumber }: { lafz: string; ayahNumber: number; }): JSX.Element => {
  const [font] = useAtom<TypesofFonts>(changeFontAtom);

  return (
    <WrapItem flexDir='column' alignItems='center'>
      <Flex dir='rtl'>
        <Text fontSize='xxx-large' fontFamily={font} userSelect='none'>
          {lafz}
        </Text>
        <Text fontSize='xxx-large' fontFamily='Uthmanic' userSelect='none'>
          {toArabicDigit(ayahNumber)}
        </Text>
      </Flex>
    </WrapItem>
  );
};
