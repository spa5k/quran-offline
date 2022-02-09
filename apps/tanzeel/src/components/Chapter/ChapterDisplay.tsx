import { Text } from '@chakra-ui/react';
import { MakeGenerics, useMatch } from 'react-location';
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
			{surah.verses.map((verse) => (
				<Text
					key={verse.id}
					fontSize='xxx-large'
					fontFamily='Uthman'
				>
					{verse.text}
				</Text>
			))}
		</div>
	);
};
