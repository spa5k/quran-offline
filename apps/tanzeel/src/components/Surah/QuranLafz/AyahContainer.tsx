import {
  Button,
  ButtonGroup,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useColorMode,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { LafzDisplay } from '@components';
import { currentAyahAtom, currentSurahAtom } from '@state';
import { useAtom } from 'jotai';
import React from 'react';
import { Ayah2 } from '../../../utils/typesV2';

export const AyahContainer = React.memo(({ lafz, ayahNumber, surahNumber }: { lafz: Ayah2; ayahNumber: number; surahNumber: number; }): JSX.Element => {
  const { colorMode } = useColorMode();
  const [currentAyah, setCurrentAyah] = useAtom(currentAyahAtom);
  const [currentSurah, setCurrentSurah] = useAtom(currentSurahAtom);

  const updateCurrentRecitation = (): void => {
    setCurrentAyah(ayahNumber);
    setCurrentSurah(surahNumber);
  };

  const bgColor = colorMode === 'dark' ? 'quran.700' : 'quran.100';
  return (
    <Popover>
      <PopoverTrigger>
        <WrapItem
          sx={{ _hover: { background: bgColor } }}
          p={2}
          bg={currentAyah === ayahNumber && currentSurah === surahNumber ? bgColor : 'none'}
          transition='all 0.5s ease-in-out'
        >
          <Wrap>
            <LafzDisplay lafz={lafz.text} ayahNumber={ayahNumber} />
          </Wrap>
        </WrapItem>
      </PopoverTrigger>
      <PopoverContent dir='rtl' p={2}>
        <PopoverArrow />
        <PopoverBody dir='rtl'>
          <VStack>
            <ButtonGroup>
              <Button onClick={() => updateCurrentRecitation()}>Play</Button>
              <Button>Pause</Button>
            </ButtonGroup>

            <p>Ayah number - {ayahNumber}</p>
            <p>Surah number - {surahNumber}</p>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
});
