import Navbar from './components/Navbar';
import { Box, Container } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Container mx="auto" maxW="96em">
          <Navbar />
        </Container>

        <Container mx="auto" maxW="96em">
          <Box px="20px">
            <div>hello</div>
          </Box>
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;
