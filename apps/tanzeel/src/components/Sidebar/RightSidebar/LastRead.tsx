import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react';
import IconBook from '~icons/dashicons/book';

export const LastRead = (): JSX.Element => (
  <HStack
    alignItems='center'
    spacing={14}
    justifyContent='space-between'
    w='full'
  >
    <Flex flexDir='column'>
      <Text size='md' color='gray.500'>
        Last Read
      </Text>
      <Heading size='md' fontWeight='600'>
        "Al-FATIHA
      </Heading>
    </Flex>
    <Box bg='quran.50' p={4} borderRadius='50%'>
      <IconBook color='quran.500' />
    </Box>
  </HStack>
);
