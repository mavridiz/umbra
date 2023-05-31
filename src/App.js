
import Register from "./Registro";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from "./Login";
import { Licencias } from "./pages/Licencias";
import { Comprar } from "./pages/Comprar";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import Photos from "./pages/Photos";
import Leaks from "./pages/Leaks";
import Homepage from "./pages/Homepage";


function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Licencias" element={<Licencias />} />
        <Route path="/Comprar/:id" element={<Comprar />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/leaks" element={<Leaks />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      <Toaster />

    </BrowserRouter>


  );
}

export default App;
