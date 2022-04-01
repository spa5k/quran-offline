import { Wrap } from '@chakra-ui/react';
import { SurahBox } from '@components';
import { getSurahList, Surah } from '@utils';
import { useEffect, useState } from 'react';

export const SurahsGrid = (): JSX.Element => {
  const [data, setData] = useState<Surah[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result: Surah[] = await getSurahList();
      setData(result);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  if (loading && !data) {
    return <Wrap>Loading...</Wrap>;
  }

  return (
    <Wrap spacing='60px' justifyContent='space-around'>
      {data.map((chapter) => (
        <SurahBox
          id={chapter.id}
          nameArabic={chapter.nameArabic}
          nameSimple={chapter.nameSimple}
          translatedName={chapter.translatedName}
          key={chapter.id}
        />
      ))}
    </Wrap>
  );
};
