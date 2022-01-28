import { HStack, Input } from '@chakra-ui/react';

export const NavBar = () => (
  <HStack spacing={50}>
    <p>Logo</p>
    <p>Quran</p>
    <p>Bookmarks</p>
    <Input placeholder="Search" size="lg" variant="filled" />
    <p>Day light</p>
  </HStack>
);
