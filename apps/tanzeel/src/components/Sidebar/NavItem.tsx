import { Flex, FlexProps, IconButton } from '@chakra-ui/react';
import { ReactText } from 'react';
import { IconType } from 'react-icons';

export const NavItem = ({ icon, children, ...rest }: NavItemProps) => (
  <Flex
    align="center"
    p="4"
    mx="4"
    borderRadius="lg"
    role="group"
    cursor="pointer"
    {...rest}
  >
    {icon && <IconButton aria-label="a" mr="4" fontSize="16" as={icon} p={2} />}
  </Flex>
);

export interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
