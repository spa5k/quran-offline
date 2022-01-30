import {
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  useColorMode,
} from '@chakra-ui/react';
// import { ReactComponent as Logo } from '../../images//Logo.svg';
import Logo from '~icons/brand/logo';
import IconSun from '~icons/clarity/sun-line';
import IconSearch from '~icons/mdi/search';
import IconNight from '~icons/mdi/weather-night';

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={50} width="full" justifyContent="space-between">
      <HStack>
        <Logo height={100} width="auto" />
        <Link>
          <Heading>Quran</Heading>
        </Link>
        <Link>
          <Heading>Bookmarks</Heading>
        </Link>
      </HStack>
      <HStack>
        <InputGroup>
          <InputLeftElement>
            <IconSearch />
          </InputLeftElement>
          <Input placeholder="Search" width={300} />
        </InputGroup>
        <IconButton
          icon={colorMode === 'light' ? <IconSun /> : <IconNight />}
          aria-label="nice"
          onClick={toggleColorMode}
          variant="solid"
          size="lg"
        />
      </HStack>
    </HStack>
  );
};
