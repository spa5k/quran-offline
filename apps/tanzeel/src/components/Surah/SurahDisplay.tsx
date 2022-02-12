import { Flex, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MakeGenerics, useMatch } from 'react-location';
import { getSurahByNumber } from '../../utils/getSurahByNumber';
import { Ayahs, SurahDetail, SurahInfo } from '../../utils/type';
import { AyahDisplay } from './AyahDisplay';
type LocationGenerics = MakeGenerics<{
	LoaderData: {
		number: number;
	};
}>;

type SurahByNumber = {
	ayahs: Ayahs[];
	surahInfo: SurahInfo;
	surahDetail: SurahDetail;
};

export const SurahDisplay = (): JSX.Element => {
	const {
		data: { number },
	} = useMatch<LocationGenerics>();

	const [surah, setSurah] = useState<SurahByNumber>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (number) {
			const fetchData = async (): Promise<void> => {
				const result: SurahByNumber = await getSurahByNumber(number);
				setSurah(result);
				setLoading(false);
				console.log(result);
			};
			fetchData().catch(console.error);
		}
	}, [number]);

	if (!surah || !surah.ayahs || !surah.surahDetail || !surah.surahInfo || loading) {
		return <p>Loading...</p>;
	}
	return (
		<VStack alignItems='center' justify='center' width='full'>
			{surah && <Text fontSize='xxx-large' fontFamily='surahnames'>{surah.surahDetail.name_arabic}</Text>}
			<Flex>
				{surah && <AyahDisplay ayahs={surah.ayahs} />}
			</Flex>
		</VStack>
	);
};
