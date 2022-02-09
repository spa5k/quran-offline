import { Text } from '@chakra-ui/react';
import { MakeGenerics, useMatch } from 'react-location';
import { Surah, SurahDetail, SurahInfo } from '../../utils/type';
type LocationGenerics = MakeGenerics<{
	LoaderData: {
		surah: {
			ayahs: Surah;
			surahInfo: SurahInfo;
			SurahDetail: SurahDetail;
		};
	};
}>;

export const ChapterDisplay = () => {
	const {
		data: { surah },
	} = useMatch<LocationGenerics>();

	console.log('data', surah);
	if (!surah?.SurahDetail) return <p>loading</p>;

	return (
		<div>
			<p>ChapterDisplay</p>
			<p>{surah.surahInfo.id}</p>

			{/* <p>{surah.SurahDetail.name_simple}</p> */}

			{surah.ayahs.words!.map((ayah) => (
				<Text
					key={ayah.id}
					fontSize='xxx-large'
					fontFamily='Uthman'
				>
					{ayah.text}
				</Text>
			))}
		</div>
	);
};
