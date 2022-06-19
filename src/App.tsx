import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Dashboard from "./pages/Home";
import Contratos from "./pages/contratos";
import Clientes from "./pages/prestador";
import Lista from "./pages/lista";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/prestador" element={<Clientes />} />
            <Route path="/contratos" element={<Contratos />} />
            <Route path="/lista_contrato" element={<Lista />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
