import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import IconHeadphone from '~icons/fluent/headphones-48-regular';

export const LastListened = (): JSX.Element => (
  <HStack
    alignItems='center'
    spacing={14}
    justifyContent='space-between'
    w='full'
  >
    <Flex flexDir='column'>
      <Text size='md' color='gray.500'>
        Last Listened
      </Text>
      <Heading size='md' fontWeight='600'>
        "Al-FATIHA
      </Heading>
    </Flex>
    <Box bg='quran.50' p={4} borderRadius='50%'>
      <IconHeadphone color='quran.500' fontWeight='bold' />
    </Box>
  </HStack>
);
