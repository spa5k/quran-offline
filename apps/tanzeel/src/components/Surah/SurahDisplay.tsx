import { Flex, Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { MakeGenerics, useMatch } from 'react-location';
import { getSurahByNumber } from '../../utils/getSurahByNumber';
import { Ayah, SurahInfo, Word } from '../../utils/types';
import { AyahDisplay } from './AyahDisplay';
type LocationGenerics = MakeGenerics<{
	LoaderData: {
		number: number;
	};
}>;

export const SurahDisplay = (): JSX.Element => {
	const {
		data: { number },
	} = useMatch<LocationGenerics>();

	const [surah, setSurah] = useState<{
		ayahs: Ayah;
		lafz: Word[][];
		surahInfo: SurahInfo;
	}>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (number) {
			const fetchData = async (): Promise<void> => {
				const result: {
					ayahs: Ayah;
					surahInfo: SurahInfo;
					lafz: Word[][];
				} = await getSurahByNumber(number);
				setSurah(result);
				setLoading(false);
			};
			fetchData().catch((error) => console.error('file', error));
		}
	}, [number]);

	if (!surah || !surah.ayahs || loading) {
		return <p>Loading...</p>;
	}

	return (
		<VStack alignItems='center' justify='center' width='full'>
			{surah && <Text fontSize='xxx-large' fontFamily='surahnames'>{surah.surahInfo.nameArabic}</Text>}

			<Flex>
				{surah && <AyahDisplay ayahs={surah.lafz} />}
			</Flex>
		</VStack>
	);
};
