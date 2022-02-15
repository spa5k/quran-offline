import { Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { MakeGenerics, useMatch } from 'react-location';
import { useIntersection } from 'react-use';
import { getAyahsPagination } from '../../utils/getAyahsPagination';
import { getSurahByNumber } from '../../utils/getSurahByNumber';
import { Ayah, Lafz, SurahInfo } from '../../utils/types';
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
	const PER_PAGE = 50;

	const [surah, setSurah] = useState<{
		ayahs: Ayah;
		surahInfo: SurahInfo;
		startingVerse: number;
		endingVerse: number;
	}>();

	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 1,
	});

	const [lafzs, setLafzs] = useState<Lafz[][]>([]);
	const [startingVerse, setStartingVerse] = useState<number>();
	const [endingVerse, setEndingVerse] = useState<number>();
	const [currentStartingVerse, setCurrentStartingVerse] = useState<number>();

	const [loading, setLoading] = useState(true);

	// update currentStartingVerse when startingVerse is defined
	useEffect(() => {
		if (startingVerse) {
			setCurrentStartingVerse(startingVerse);
		}
	}, [startingVerse]);

	useEffect(() => {
		if (intersection && intersection.intersectionRatio > 0 && currentStartingVerse && currentStartingVerse && endingVerse) {
			setCurrentStartingVerse(currentStartingVerse + PER_PAGE);
		}
	}, [intersection]);

	useEffect(() => {
		if (number) {
			const fetchData = async (): Promise<void> => {
				const result: {
					ayahs: Ayah;
					surahInfo: SurahInfo;
					startingVerse: number;
					endingVerse: number;
				} = await getSurahByNumber(number);
				setSurah(result);
				setEndingVerse(result.endingVerse);
				setStartingVerse(result.startingVerse);
				setLoading(false);
			};
			fetchData().catch((error) => console.error('file', error));
		}
	}, [number]);

	useEffect(() => {
		const fetchLafz = async (): Promise<void> => {
			if (number && endingVerse && currentStartingVerse) {
				const result: Lafz[][] = await getAyahsPagination(PER_PAGE, number, endingVerse, currentStartingVerse);
				setLafzs((lafzs) => [...lafzs, ...result]);
			}
		};
		fetchLafz().catch((error) => console.error('file', error));
	}, [currentStartingVerse]);

	if (!surah || !surah.ayahs || loading || !startingVerse || !endingVerse || !currentStartingVerse || !number) {
		return <p>Loading...</p>;
	}

	return (
		<VStack alignItems='center' justify='center' width='full'>
			{surah && <Text fontSize='xxx-large' fontFamily='surahnames'>{surah.surahInfo.nameArabic}</Text>}

			{lafzs.length > 0 && <AyahDisplay ayahs={lafzs} />}

			{currentStartingVerse < endingVerse && <p ref={intersectionRef}>Loading...</p>}
		</VStack>
	);
};
