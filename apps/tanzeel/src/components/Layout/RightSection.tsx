import { Box, Text, VStack } from '@chakra-ui/react';

export const RightSection = () => (
  <VStack className="right-section" justifyContent="space-around" height="full">
    <VStack>
      <Text>Last Read</Text>
      <Text>Surah Name</Text>
      <Text>Ayah Number</Text>
    </VStack>
    <VStack>
      <Text>Last Listened</Text>
      <Text>Surah Name</Text>
      <Text>Ayah Number</Text>
    </VStack>
    <Box>Ayah of the day component</Box>
  </VStack>
);
