import { ChakraProvider } from '@chakra-ui/react'
import theme from './Theme';
import Page from "./Page";


function App() {
  return (
    <ChakraProvider theme={theme}>
    <div className="App">
      <Page/>
    </div>
    </ChakraProvider>
  );
}

export default App;
