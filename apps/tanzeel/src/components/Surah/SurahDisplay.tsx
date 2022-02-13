import { Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MakeGenerics, useMatch } from 'react-location';
import { getSurahByNumber } from '../../utils/getSurahByNumber';
// import { Ayahs, SurahDetail, SurahInfo } from '../../utils/type';
import { Ayah, SurahInfo } from '../../utils/typev2';
type LocationGenerics = MakeGenerics<{
	LoaderData: {
		number: number;
	};
}>;

type SurahByNumber = {
	ayahs: Ayah[];
	surahInfo: SurahInfo;
};

export const SurahDisplay = (): JSX.Element => {
	const {
		data: { number },
	} = useMatch<LocationGenerics>();

	const [surah, setSurah] = useState<{
		ayahs: Ayah;
		surahInfo: SurahInfo;
	}>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (number) {
			const fetchData = async (): Promise<void> => {
				const result: {
					ayahs: Ayah;
					surahInfo: SurahInfo;
				} = await getSurahByNumber(number);
				setSurah(result);
				setLoading(false);
			};
			fetchData().catch(console.error);
		}
	}, [number]);

	if (!surah || !surah.ayahs || !surah.surahInfo || loading) {
		return <p>Loading...</p>;
	}
	console.log(surah);
	return (
		<VStack alignItems='center' justify='center' width='full'>
			{surah && <Text fontSize='xxx-large' fontFamily='surahnames'>{surah.surahInfo.nameArabic}</Text>}
			{
				/* <Flex>
				{surah && <AyahDisplay ayahs={surah.ayahs} />}
			</Flex> */
			}
		</VStack>
	);
};
