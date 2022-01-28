import { Flex, HStack, VStack } from '@chakra-ui/react';
import { LeftSection, MiddleSection, RightSection } from '.';
import { NavBar } from '../Navbar';

export const MainLayout = () => (
  <Flex h="100vh" align="center" justify="center">
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <NavBar />
      <HStack w="100%" h={800}>
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </HStack>
    </VStack>
  </Flex>
);
