import { Box, chakra, Link, useColorModeValue } from '@chakra-ui/react';

export const AyahOfTheDay = (): JSX.Element => (
  <Box
    w='full'
    mx='auto'
    py={4}
    px={8}
    bg={useColorModeValue('quran.500', 'quran.500')}
    shadow='lg'
    rounded='xl'
  >
    <chakra.h2
      color='#90d0ab'
      fontSize={{ base: '2xl', md: '3xl' }}
      mt={{ base: 2, md: 0 }}
      fontWeight='bold'
    >
      Ayah of the Day
    </chakra.h2>
    <chakra.span>
      <chakra.p mt={2} color='gray.200'>
        In the Name of Allah—the Most Compassionate, Most Merciful.{' '}
        <Link fontSize='xl' color={useColorModeValue('brand.500', 'brand.300')}>
          1:1
        </Link>
      </chakra.p>
    </chakra.span>
  </Box>
);
