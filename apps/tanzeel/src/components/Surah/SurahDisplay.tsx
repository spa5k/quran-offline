import { Flex, Text } from '@chakra-ui/react';
import { AyahDisplay, AyahPlayer, FontChanger } from '@components';
import { recitationUrlsAtom } from '@state';
import { Ayah, ayahCountList, getAllAyahsRecitationUrl, getAyahsPagination, getSurahByNumber, Lafz, SurahInfo } from '@utils';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { MakeGenerics, useMatch } from 'react-location';
import { useIntersection } from 'react-use';

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
	const [ayahCount, setAyahCount] = useState(0);

	const [, setRecitationUrls] = useAtom(recitationUrlsAtom);

	// get ayah count
	useEffect(() => {
		if (number) {
			const currentAyahCount = ayahCountList[number - 1];

			setAyahCount(currentAyahCount);
		}
	}, [number]);

	// use ayahCount then use getAllAyahRecitationUrl to get the list of urls
	useEffect(() => {
		if (ayahCount && number) {
			const ayahUrls = async (): Promise<void> => {
				const urls = await getAllAyahsRecitationUrl(number);
				setRecitationUrls(urls);
			};
			ayahUrls().catch(console.error);
		}
	}, [ayahCount]);

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
		<Flex flexDir='column' alignItems='center' width='full' height='full' minH='full' justifyContent='space-between'>
			<FontChanger />
			{surah && <Text fontSize='xxx-large' fontFamily='surahnames'>{surah.surahInfo.nameArabic}</Text>}

			{lafzs.length > 0 && <AyahDisplay ayahs={lafzs} surahNumber={surah.surahInfo.id as number} />}

			{currentStartingVerse < endingVerse && <p ref={intersectionRef}>Loading...</p>}
			<AyahPlayer />
		</Flex>
	);
};
