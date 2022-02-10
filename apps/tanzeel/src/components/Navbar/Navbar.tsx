import {
	Box,
	Button,
	chakra,
	CloseButton,
	Flex,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	useColorMode,
	useColorModeValue,
	useDisclosure,
	VisuallyHidden,
	VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-location';
import Logo from '~icons/brand/logo';
import IconMenu from '~icons/eva/menu-outline';
import IconHeadphone from '~icons/fluent/headphones-48-regular';
import IconSun from '~icons/heroicons-solid/sun';
import IconSearch from '~icons/mdi/search';
import IconNight from '~icons/mdi/weather-night';

export const NavBar = (): JSX.Element => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bg: 'white' | 'gray.800' = useColorModeValue('white', 'gray.800');
	const mobileNav: {
		isOpen: boolean;
		onOpen: () => void;
		onClose: () => void;
		onToggle: () => void;
		isControlled: boolean;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getButtonProps: (props?: any) => any;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		getDisclosureProps: (props?: any) => any;
	} = useDisclosure();

	return (
		<React.Fragment>
			<chakra.header
				bg={bg}
				w='full'
				px={{ base: 2, sm: 4 }}
				py={4}
				shadow='md'
			>
				<Flex alignItems='center' justifyContent='space-between' mx='auto'>
					<HStack display='flex' spacing={3} alignItems='center'>
						<Box display={{ base: 'inline-flex', md: 'none' }}>
							<IconButton
								display={{ base: 'flex', md: 'none' }}
								aria-label='Open menu'
								fontSize='20px'
								color={useColorModeValue('gray.800', 'inherit')}
								variant='ghost'
								icon={<IconMenu />}
								onClick={mobileNav.onOpen}
							/>
							<VStack
								pos='absolute'
								top={0}
								left={0}
								right={0}
								display={mobileNav.isOpen ? 'flex' : 'none'}
								flexDirection='column'
								p={2}
								pb={4}
								m={2}
								bg={bg}
								spacing={3}
								rounded='sm'
								shadow='sm'
							>
								<CloseButton
									aria-label='Close menu'
									justifySelf='self-start'
									onClick={mobileNav.onClose}
								/>
								<Button w='full' variant='ghost'>
									Quran
								</Button>
								<Button w='full' variant='ghost'>
									Bookmarks
								</Button>
							</VStack>
						</Box>
						<chakra.a
							href='/'
							title='Choc Home Page'
							display='flex'
							alignItems='center'
						>
							<Logo height={50} width='auto' />

							<VisuallyHidden>Choc</VisuallyHidden>
						</chakra.a>

						<HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
							<Button variant='ghost' size='lg'>
								<Link to='/'>
									Quran
								</Link>
							</Button>

							<Button variant='ghost' size='lg'>
								<Link to='/surah/1'>
									Bookmarks
								</Link>
							</Button>
						</HStack>
					</HStack>
					<HStack
						spacing={3}
						display={mobileNav.isOpen ? 'none' : 'flex'}
						alignItems='center'
					>
						<InputGroup>
							<InputLeftElement
								pointerEvents='none'
								children={<IconSearch />}
							/>
							<Input type='tel' placeholder='Search...' />
						</InputGroup>
						<IconButton
							icon={colorMode === 'light' ? <IconSun /> : <IconNight />}
							aria-label='nice'
							onClick={toggleColorMode}
							variant='solid'
							size='lg'
						/>
						<IconButton
							icon={<IconHeadphone />}
							aria-label='headphones'
							variant='solid'
							size='lg'
						/>
						IconHeadphone
					</HStack>
				</Flex>
			</chakra.header>
		</React.Fragment>
	);
};
