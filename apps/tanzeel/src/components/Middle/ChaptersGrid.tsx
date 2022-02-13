import { Wrap } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getSurahList } from '../../utils/getSurahList';
import { Surah } from '../../utils/typev2';
import { SurahBox } from '../Surah';

export const ChaptersGrid = (): JSX.Element => {
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
