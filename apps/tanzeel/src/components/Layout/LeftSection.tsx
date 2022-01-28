import { Button, VStack } from '@chakra-ui/react';

export const LeftSection = () => (
  <VStack
    alignItems="center"
    width={100}
    bg="gray.500"
    height="100%"
    justifyContent="space-around"
  >
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
  </VStack>
);
