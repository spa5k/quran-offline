import { MakeGenerics, useMatch } from 'react-location';
import { Chapter } from '../../utils/type';

type LocationGenerics = MakeGenerics<{
	LoaderData: {
		surah: Chapter;
	};
}>;

export const ChapterDisplay = () => {
	const {
		data: { surah },
	} = useMatch<LocationGenerics>();

	if (!surah) return <p>loading</p>;

	console.log('data', surah);

	return (
		<div>
			<p>ChapterDisplay</p>
			<p>{surah.id}</p>

			<p>{surah.name}</p>
			{surah.verses.map((verse) => <p key={verse.id}>{verse.text}</p>)}
		</div>
	);
};
