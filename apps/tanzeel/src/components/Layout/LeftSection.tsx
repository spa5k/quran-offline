import { VStack } from '@chakra-ui/react';
import { Sidebar } from '../Sidebar';

export const LeftSection = () => (
  <VStack
    alignItems="center"
    width={100}
    height="100%"
    justifyContent="space-around"
  >
    <Sidebar />
  </VStack>
);
