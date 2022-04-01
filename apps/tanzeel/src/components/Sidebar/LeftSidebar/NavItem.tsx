import { Flex, FlexProps, IconButton } from '@chakra-ui/react';
import { ReactText } from 'react';
import { IconType } from 'react-icons';

export const NavItem = ({ icon, children, ...rest }: NavItemProps): JSX.Element => (
  <Flex
    align='center'
    p='4'
    mx='4'
    borderRadius='lg'
    role='group'
    cursor='pointer'
    {...rest}
  >
    {icon && <IconButton aria-label='a' mr='4' fontSize='16' as={icon} p={2} />}
  </Flex>
);

export type NavItemProps = {
  icon: IconType;
  children: ReactText;
} & FlexProps;
