import { Container } from '@chakra-ui/react';
import { MainLayout } from './components/Layout';

function App(): JSX.Element {
  return (
    <Container w='full' h='full' maxW='full' p={0}>
      <MainLayout />
    </Container>
  );
}

export default App;
