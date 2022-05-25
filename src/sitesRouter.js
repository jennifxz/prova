import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/index.js'
import CorPrimaria from './pages/corPrimaria/index.js'
import Frequencia from './pages/frequencia/index.js'
import Ingresso from './pages/ingresso/index.js'
import MaiorNumero from './pages/maiorNumero/index.js'

export default function SitesRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/corPrimaria' element={<CorPrimaria />} />
                <Route path='/frequencia' element={<Frequencia />} />
                <Route path='/ingresso' element={<Ingresso />} />
                <Route path='/maiorNumero' element={<MaiorNumero />} />
            </Routes>
        </BrowserRouter>
    );
}