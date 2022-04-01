import { Box, BoxProps } from '@chakra-ui/react';
import { LinkItems } from './LeftSidebar';
import { NavItem } from './NavItem';

type SidebarContentProps = {
  onClose: () => void;
} & BoxProps;
export const SidebarContent = ({ onClose, ...rest }: SidebarContentProps): JSX.Element => (
  <Box h='full' {...rest}>
    {LinkItems.map((link) => (
      <NavItem key={link.name} icon={link.icon}>
        {link.name}
      </NavItem>
    ))}
  </Box>
);
