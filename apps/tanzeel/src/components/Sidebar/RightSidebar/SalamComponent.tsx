import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import IconUser from '~icons/el/user';

export interface SalamComponentProps {
	user: {
		name: string;
	};
}

export const SalamComponent = ({ user }: SalamComponentProps): JSX.Element => {
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
			<Box bg='quran.50' p={4} borderRadius='50%'>
				<IconUser color='quran.500' />
			</Box>
		</HStack>
	);
};
