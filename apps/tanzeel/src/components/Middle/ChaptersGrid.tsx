import { Wrap } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getSurahList } from '../../utils/getChapterList';
import { SurahList } from '../../utils/type';
import { ChapterBox } from '../Chapter';

export const ChaptersGrid = (): JSX.Element => {
	const [data, setData] = useState<SurahList[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			const result: SurahList[] = await getSurahList();
			setData(result);
			setLoading(false);
			console.log(result);
		};
		fetchData().catch(console.error);
	}, []);

	if (loading && !data) {
		return <Wrap>Loading...</Wrap>;
	}

	return (
		<Wrap spacing='60px' justifyContent='space-around'>
			{data.map((chapter) => (
				<ChapterBox
					id={chapter.id}
					name_arabic={chapter.name_arabic}
					name_simple={chapter.name_simple}
					translated_name={chapter.translated_name}
				/>
			))}
		</Wrap>
	);
};
