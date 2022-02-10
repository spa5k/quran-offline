import { Flex } from '@chakra-ui/react';
import { RightSidebar } from '../Sidebar';

export const RightSection = (): JSX.Element => (
	<Flex height='100%' alignItems='center'>
		<RightSidebar />
	</Flex>
);
