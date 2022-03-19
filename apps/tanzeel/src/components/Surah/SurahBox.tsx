import { Badge, chakra, Flex, Heading, useColorModeValue, VStack, WrapItem } from '@chakra-ui/react';
import { Surah } from '@utils';
import { Link } from 'react-location';
import IconHeart from '~icons/akar-icons/heart';

export const SurahBox = (
	{ nameArabic, nameSimple, translatedName, id }: Surah,
): JSX.Element => (
	<WrapItem key={id}>
		<VStack
			w='650px'
			height='150px'
			px={4}
			py={3}
			bg={useColorModeValue('white', 'gray.800')}
			shadow='lg'
			rounded='md'
			alignItems='flex-start'
		>
			<Flex w='full' justifyContent='space-between' fontSize='xl' fontWeight='bold' mb={2}>
				<Badge colorScheme='green' ml='1' fontSize='0.8em'># {id}</Badge>
				<IconHeart color='quran.500' />
			</Flex>
			<VStack justifyContent='space-between' alignItems='flex-start'>
				<Link to={`/surah/${id}`}>
					<Heading as='h3' size='md' fontWeight={600}>
						{nameSimple} <chakra.span fontFamily='IndoPak' ml={4} color='quran.500'>{nameArabic}</chakra.span>
					</Heading>
				</Link>
				<Heading as='h3' size='md' fontWeight={600} color='gray.500'>
					{translatedName}
				</Heading>
			</VStack>
		</VStack>
	</WrapItem>
);
