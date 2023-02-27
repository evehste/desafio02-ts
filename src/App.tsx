import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Conta from './pages/Conta';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
            <Layout>
              <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/conta/:id' element={ <Conta/> } />
              </Routes>
            </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}
export default App;