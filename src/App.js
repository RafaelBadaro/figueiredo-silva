import './App.css';
import CustomNavbar from './Components/CustomNavbar/CustomNavbar';
// import CustomFooter from './Components/CustomFooter/CustomFooter';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './Components/Pages/Home/Home'
import Escritorio from './Components/Pages/Escritorio/Escritorio'
import AreasDeAtuacao from './Components/Pages/AreasDeAtuacao/AreasDeAtuacao'
import Equipe from './Components/Pages/Equipe/Equipe'
import JunteSeANos from './Components/Pages/JunteSeANos/JunteSeANos'
import Contato from './Components/Pages/Contato/Contato'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomNavbar />}>
          <Route index element={<Home />} />
          <Route path="escritorio" element={<Escritorio />} />
          <Route path="areasDeAtuacao" element={<AreasDeAtuacao />} />
          <Route path="equipe" element={<Equipe />} />
          <Route path="junteseANos" element={<JunteSeANos />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <CustomFooter /> */}
  </>
  );
}

export default App;
