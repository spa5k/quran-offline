import { Container } from '@chakra-ui/react';
import { MainLayout } from './components/Layout';

function App() {
	return (
		<Container maxW='container.xl' p={0}>
			<MainLayout />
		</Container>
	);
}

export default App;
