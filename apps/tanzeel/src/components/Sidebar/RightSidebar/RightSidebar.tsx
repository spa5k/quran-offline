import { Box, chakra, Flex, Heading, HStack, Link, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import IconBook from '~icons/dashicons/book';
import IconUser from '~icons/el/user';
import IconHeadphone from '~icons/fluent/headphones-48-regular';

export const RightSidebar = () => (
	<VStack spacing={20} alignItems='center' width={300} mr={20}>
		<SalamComponent user={{ name: 'User' }} />
		<LastRead />
		<LastListened />
		<AyahOfTheDay />
	</VStack>
);

type SalamComponentProps = {
	user: {
		name: string;
	};
};

const SalamComponent = ({ user }: SalamComponentProps) => {
	if (!user.name) {
		user.name = 'Muslim';
	}

	return (
		<HStack
			alignItems='center'
			spacing={14}
			justifyContent='space-between'
			w='full'
		>
			<Flex flexDir='column'>
				<Text size='md' color='gray.500'>
					Salam,
				</Text>
				<Heading size='md' fontWeight='600'>
					{user.name.toUpperCase()}
				</Heading>
			</Flex>
			<Box bg='#def2e7' p={4} borderRadius='50%'>
				<IconUser color='#2da861' />
			</Box>
		</HStack>
	);
};

const LastRead = () => (
	<HStack
		alignItems='center'
		spacing={14}
		justifyContent='space-between'
		w='full'
	>
		<Flex flexDir='column'>
			<Text size='md' color='gray.500'>
				Last Read
			</Text>
			<Heading size='md' fontWeight='600'>
				"Al-FATIHA
			</Heading>
		</Flex>
		<Box bg='#def2e7' p={4} borderRadius='50%'>
			<IconBook color='#2da861' />
		</Box>
	</HStack>
);

const LastListened = () => (
	<HStack
		alignItems='center'
		spacing={14}
		justifyContent='space-between'
		w='full'
	>
		<Flex flexDir='column'>
			<Text size='md' color='gray.500'>
				Last Listened
			</Text>
			<Heading size='md' fontWeight='600'>
				"Al-FATIHA
			</Heading>
		</Flex>
		<Box bg='#def2e7' p={4} borderRadius='50%'>
			<IconHeadphone color='#2da861' fontWeight='bold' />
		</Box>
	</HStack>
);

const AyahOfTheDay = () => (
	<Box
		w='full'
		mx='auto'
		py={4}
		px={8}
		bg={useColorModeValue('#2da861', '#2da861')}
		shadow='lg'
		rounded='xl'
	>
		<chakra.h2
			color='#90d0ab'
			fontSize={{ base: '2xl', md: '3xl' }}
			mt={{ base: 2, md: 0 }}
			fontWeight='bold'
		>
			Ayah of the Day
		</chakra.h2>
		<chakra.span>
			<chakra.p mt={2} color='gray.200'>
				In the Name of Allah—the Most Compassionate, Most Merciful.{' '}
				<Link fontSize='xl' color={useColorModeValue('brand.500', 'brand.300')}>
					1:1
				</Link>
			</chakra.p>
		</chakra.span>
	</Box>
);
