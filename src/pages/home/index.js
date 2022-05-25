import React from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
            <h1>Home</h1>

            <ul>
                <li><Link to='/corPrimaria'>Cor Primaria</Link></li>
                <li><Link to='/frequencia'>Frequencia</Link></li>
                <li><Link to='/ingresso'>Ingresso</Link></li>
                <li><Link to='/maiorNumero'>Maior Numero</Link></li>
                <li><Link to='/home'>Home</Link></li>
            </ul>
        </div>
    );
}