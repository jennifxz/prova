import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Ingresso() {

    const [inteiras, setInterias] = useState(0);
    const [meias, setMeias] = useState(0);
    const [diasemana, setDiasemana] = useState('');
    const [nacionalidade, setNacionalidade] = useState('');
    const [total, setTotal] = useState(0);

    async function Calcular() {
    const resp = await axios.post('http://localhost:5000/dia2/ingressoCinema/', {
        qtdinteiras:inteiras, 
        qtdMeias:meias, 
        diaSemana:diasemana, 
        nacionalidade:nacionalidade
    })

    setTotal(resp.data.total);
    
}

    return(
        <div className="ingresso">
            <h1>Ingresso</h1>
            <div>
                <p> Insira a quantidade de inteiras:</p>
                <input type='text' value={inteiras} onChange={e=> setInterias(Number(e.target.value))}></input>
            </div>
            <div>
                <p> Insira a quantidade de meias:</p>
                <input type='text' value={meias}onChange={e=> setMeias(Number(e.target.value))}></input>
            </div>
            <div>
                <p> Insira o dia da semana:</p>
                <input type='text' value={diasemana} onChange={e => setDiasemana(e.target.value)}></input>
            </div>
            <div>
                <p> Insira a nacionalidade do filme:</p>
                <input type='text' value={nacionalidade} onChange={ e=> setNacionalidade(e.target.value)}></input>
            </div>
            <button onClick= {Calcular}> Calcular</button>
            <p> O valor total dos ingressos é de {total} </p>
            </div>
    );
}