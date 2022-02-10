import { VStack } from '@chakra-ui/react';
import { LeftSidebar } from '../Sidebar/LeftSidebar';

export const LeftSection = (): JSX.Element => (
	<VStack
		alignItems='center'
		width={100}
		height='100%'
		justifyContent='space-around'
	>
		<LeftSidebar />
	</VStack>
);
