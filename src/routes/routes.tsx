import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLotofacil from "../pages/Lotofacil/pageLotofacil";
import PageMegasena from "../pages/Megasena/pageMegasena";
import PageQuina from "../pages/Quina/pageQuina";
import Header from "../components/header/header";

export const Caminhos = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/lotofacil" element={<PageLotofacil />} />
        <Route path="/megasena" element={<PageMegasena />} />
        <Route path="/quina" element={<PageQuina />} />
      </Routes>
    </BrowserRouter>
  );
};
