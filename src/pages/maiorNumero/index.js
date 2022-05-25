import React from 'react';
import { Link } from 'react-router-dom'

export default function MaiorNumero() {
    return(
        <div className="maiorNumero">
            <h1>Maior Numero</h1>
            <Link to='/corPrimaria'>Cor Primaria</Link>
            <Link to='/frequencia'>Frequencia</Link>
            <Link to='/ingresso'>Ingresso</Link>
            <Link to='/maiorNumero'>Maior Numero</Link>
            <Link to='/home'>Home</Link>
        </div>
    );
}