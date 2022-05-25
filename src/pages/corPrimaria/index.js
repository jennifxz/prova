import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export default function CorPrimaria() {
    const [cor, setCor] = useState('');

    const verificarCorPrimaria = async _ => { 
        const resp = await axios.get('/dia2/corPrimaria/' + cor)
        resp.data
    }

    return(
        <div className="corPrimaria">
            <h1>Cor Primaria</h1>
            <Link to='/corPrimaria'>Cor Primaria</Link>
            <Link to='/frequencia'>Frequencia</Link>
            <Link to='/ingresso'>Ingresso</Link>
            <Link to='/maiorNumero'>Maior Numero</Link>
            <Link to='/home'>Home</Link>
            <section>
                <div>Cor: <input type="text" value={cor} onChange={e => setCor(e.target.value)} /></div>
                <div><button onClick={verificarCorPrimaria} >Verificar</button></div>
                <div>
                    <p>É cor primaria? <span id='corPrimariaResp'></span></p>
                </div>
            </section>
        </div>
    );
}