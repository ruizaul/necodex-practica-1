import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Agregar } from "./pages/Agregar";
import { Editar } from "./pages/Editar";
import { Detalles } from "./pages/Detalles";
import { Page404 } from "./pages/404";

export const Fpage = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agregar" element={<Agregar />} />
          <Route path="/editar" element={<Editar />} />
          <Route path="/detalles" element={<Detalles />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
};
