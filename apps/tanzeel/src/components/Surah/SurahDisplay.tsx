import { Flex, Text } from '@chakra-ui/react';
import { AyahContainer, AyahPlayer, FontChanger } from '@components';
import { recitationUrlsAtom } from '@state';
import { ayahCountList, getAllAyahsRecitationUrl, getSurahByNumber, SurahInfo } from '@utils';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { MakeGenerics, useMatch } from 'react-location';
import { Ayah2 } from '../../utils/typesV2';

type LocationGenerics = MakeGenerics<{
  LoaderData: {
    number: number;
  };
}>;

export const SurahDisplay = (): JSX.Element => {
  const {
    data: { number },
  } = useMatch<LocationGenerics>();

  const [surah, setSurah] = useState<SurahInfo>();

  const [ayahs, setAyahs] = useState<Ayah2[]>();

  const [ayahCount, setAyahCount] = useState(0);

  const [, setRecitationUrls] = useAtom(recitationUrlsAtom);

  // get ayah count
  useEffect(() => {
    if (number) {
      const currentAyahCount = ayahCountList[number - 1];
      setAyahCount(currentAyahCount);
    }
  }, [number]);

  // use ayahCount then use getAllAyahRecitationUrl to get the list of urls
  useEffect(() => {
    if (ayahCount && number) {
      const ayahUrls = async (): Promise<void> => {
        const urls = await getAllAyahsRecitationUrl(number);
        setRecitationUrls(urls);
      };
      ayahUrls().catch(console.error);
    }
  }, [ayahCount]);

  useEffect(() => {
    if (number) {
      const fetchData = async (): Promise<void> => {
        const result = await getSurahByNumber(number);
        setSurah(result.surahInfo);
        setAyahs(result.ayahs);
      };
      fetchData().catch((error) => console.error('file', error));
    }
  }, [number]);

  if (!surah || !number || !ayahs || ayahs.length <= 0) {
    return <p>Loading...</p>;
  }

  return (
    <Flex flexDir='column' alignItems='center' width='full' height='full' minH='full' justifyContent='space-between'>
      <FontChanger />
      {surah && <Text fontSize='xxx-large' fontFamily='surahnames'>{surah.nameArabic}</Text>}

      {ayahs.length > 0 && ayahs.map((ayah, index) => {
        return <AyahContainer ayahNumber={index + 1} lafz={ayah} key={`${index + 1}`} surahNumber={surah.id as number} />;
      })}

      <AyahPlayer />
    </Flex>
  );
};
