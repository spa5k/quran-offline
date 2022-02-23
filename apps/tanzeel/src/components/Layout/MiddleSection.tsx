import { Flex, VStack } from '@chakra-ui/react';
import { SelectionBar, SurahsGrid } from '../Middle';

export const MiddleSection = (): JSX.Element => (
	<Flex height='100%'>
		<VStack width='full' px={20} py={10} spacing={10}>
			<SelectionBar />
			<SurahsGrid />
		</VStack>
	</Flex>
);
