import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Cadastro from './pages/Cadastro/Cadastro'
import Login from './pages/Login/Login'
import Formulario from './pages/Home/Formulario'
import Ticket from "./pages/Ticket/Ticket";
import Principal from './pages/Principal/Principal';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/Cadastro" element={<Cadastro />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Formulario" element={<Formulario />} />
                <Route path="/Ticket" exact element={<Ticket/>} />
            </Routes>
        </BrowserRouter>);
};

export default Router;