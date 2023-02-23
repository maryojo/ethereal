import { ChakraProvider } from '@chakra-ui/react'
import theme from './Theme';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Page from "./Page";
import Canopy from './pages/canopy';


function App() {
  return (
    <ChakraProvider theme={theme}>
    <AnimatePresence exitBeforeEnter>
    <Router>
      <Routes>
      <Route path="/" element={<Page/>} />
      <Route path="/canopy" element={<Canopy/>} />
      </Routes>
    </Router>
    </AnimatePresence>
    
    </ChakraProvider>
  );
}

export default App;
