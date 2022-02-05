import { Box, BoxProps, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import IconHeart from '~icons/akar-icons/heart';
import IconBookOpen from '~icons/bx/bx-book-open';
import IconSettings from '~icons/carbon/settings';
import IconShare from '~icons/ci/share-outline';
import IconHeadphone from '~icons/fluent/headphones-48-regular';
import { NavItem } from './NavItem';

interface LinkItemProps {
	name: string;
	icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
	{ name: 'Quran', icon: IconBookOpen },
	{ name: 'Bookmarks', icon: IconHeart },
	{ name: 'Listen', icon: IconHeadphone },
	{ name: 'Share', icon: IconShare },
	{ name: 'Settings', icon: IconSettings },
];

export const LeftSidebar = () => {
	const { isOpen, onClose } = useDisclosure();

	return (
		<Box>
			<SidebarContent
				onClose={() => onClose}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => (
	<Box h='full' {...rest}>
		{LinkItems.map((link) => (
			<NavItem key={link.name} icon={link.icon}>
				{link.name}
			</NavItem>
		))}
	</Box>
);
