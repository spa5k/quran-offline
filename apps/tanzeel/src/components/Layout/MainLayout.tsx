import { Flex, HStack, VStack } from '@chakra-ui/react';
import { NavBar } from '../Navbar';
import { LeftSection, MiddleSection, RightSection } from '.';

export const MainLayout = () => {
	return (
		<Flex h='100vh' align='center' justify='center' w='full'>
			<VStack h='full' alignItems='flex-start' w='full'>
				<NavBar />
				<HStack h={800}>
					<LeftSection />
					<MiddleSection />
					<RightSection />
				</HStack>
			</VStack>
		</Flex>
	);
};
