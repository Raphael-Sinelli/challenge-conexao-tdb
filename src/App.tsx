import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Integrantes from './pages/Integrantes';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';
import Solucao from './pages/Solucao';
import Sobre from './pages/Sobre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="integrantes" element={<Integrantes />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contato" element={<Contato />} />
          <Route path="solucao" element={<Solucao />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;