import { Box, Button, HStack } from '@chakra-ui/react';

export const SelectionBar = () => (
  <HStack justify="space-between" width="full">
    <Box>
      <Button>1</Button>
      <Button>2</Button>
    </Box>
    <HStack>
      <Button>Sort Serial</Button>
      <Button>Sort Alphabet</Button>
      <Button>Sort Parah</Button>
    </HStack>
  </HStack>
);
