import { Wrap } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getChapterList } from '../../utils/getChapterList';
import { Chapter } from '../../utils/type';
import { ChapterBox } from '../Chapter';

export const ChaptersGrid = () => {
	const [data, setData] = useState<Chapter[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getChapterList()
			.then(response => {
				setData(response);
				setLoading(false);
			});
	}, []);

	if (loading && !data) {
		return <Wrap>Loading...</Wrap>;
	}

	return (
		<Wrap spacing='30px'>
			{data.map((chapter, index) => (
				<ChapterBox
					id={chapter.id}
					name={chapter.name}
					total_verses={chapter.total_verses}
					translation={chapter.translation}
					transliteration={chapter.transliteration}
					type={chapter.type}
				/>
			))}
		</Wrap>
	);
};
