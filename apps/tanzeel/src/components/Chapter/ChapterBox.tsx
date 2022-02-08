import { Badge, chakra, Flex, Heading, useColorModeValue, VStack, WrapItem } from '@chakra-ui/react';
import { Link } from 'react-location';
import IconHeart from '~icons/akar-icons/heart';
import { Chapter } from '../../utils/type';

export const ChapterBox = ({ id, name, total_verses, translation, transliteration, type }: Chapter) => (
	<WrapItem>
		<VStack
			w='350px'
			height='150px'
			px={4}
			py={3}
			bg={useColorModeValue('white', 'gray.800')}
			shadow='lg'
			rounded='md'
			alignItems='flex-start'
		>
			<Flex w='full' justifyContent='space-between' fontSize='xl' fontWeight='bold' mb={2}>
				<Badge colorScheme='green' ml='1' fontSize='0.8em'>#{id}</Badge>
				<IconHeart color='#2da861' />
			</Flex>
			<VStack justifyContent='space-between' alignItems='flex-start'>
				<Link to={`/surah/${id}`}>
					<Heading as='h3' size='md' fontWeight={600}>
						{transliteration} <chakra.span fontFamily='KSARegular, Uthman' ml={4} color='#2da861'>{name}</chakra.span>
					</Heading>
				</Link>
				<Heading as='h3' size='md' fontWeight={600} color='gray.500'>
					{translation}
				</Heading>
			</VStack>
		</VStack>
	</WrapItem>
);
