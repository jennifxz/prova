import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function CorPrimaria() {
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('')

    async function verificarCorPrimaria(){ 
        const resp = await axios.get('http://localhost:5000/dia2/corPrimaria/' + cor)
        if(resp.data.primaria === true)
            setResposta('Sim!')
        else
            setResposta('Não!')
    }

    return(
        <div className="corPrimaria">
            <h1>Cor Primaria</h1>
            <section>
                <div>Cor: <input type="text" value={cor} onChange={e => setCor(e.target.value)} /></div>
                <div><button onClick={verificarCorPrimaria} >Verificar</button></div>
                <div>
                    <p>É cor primaria? {resposta}</p>
                </div>
            </section>
        </div>
    );
}