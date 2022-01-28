import { Container } from '@chakra-ui/react';
import { MainLayout } from './components/Layout';

function App() {
  return (
    <Container maxW="container.xl" p={0} bg="gray.200">
      <MainLayout />
    </Container>
  );
}

export default App;
