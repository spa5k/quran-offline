import { VStack } from '@chakra-ui/react';
import { AyahOfTheDay, LastListened, LastRead, SalamComponent } from '@components';

export const RightSidebar = (): JSX.Element => (
	<VStack spacing={20} alignItems='center' width={300} mr={20}>
		<SalamComponent user={{ name: 'User' }} />
		<LastRead />
		<LastListened />
		<AyahOfTheDay />
	</VStack>
);
