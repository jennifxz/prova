import React from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <div className="home">
            <h1>Home</h1>
            <Link to='/corPrimaria'>Cor Primaria</Link>
            <Link to='/frequencia'>Frequencia</Link>
            <Link to='/ingresso'>Ingresso</Link>
            <Link to='/maiorNumero'>Maior Numero</Link>
            <Link to='/home'>Home</Link>
        </div>
    );
}