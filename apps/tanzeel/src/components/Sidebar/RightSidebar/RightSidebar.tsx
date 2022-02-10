import { VStack } from '@chakra-ui/react';
import { AyahOfTheDay } from './AyahOfTheDay';
import { LastListened } from './LastListened';
import { LastRead } from './LastRead';
import { SalamComponent } from './SalamComponent';

export const RightSidebar = (): JSX.Element => (
	<VStack spacing={20} alignItems='center' width={300} mr={20}>
		<SalamComponent user={{ name: 'User' }} />
		<LastRead />
		<LastListened />
		<AyahOfTheDay />
	</VStack>
);
