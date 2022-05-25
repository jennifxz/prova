import React from 'react';

import axios from 'axios';
import { useState } from 'react';

export default function Frequencia() {

    const [texto, setTexto] = useState('');
    const [caractere, setCaractere] = useState('');
    const [resposta, setResposta] = useState(0);

    async function verficarFrequencia(){
    const resp = await axios.get(`http://localhost:5000/frequencia/${texto}/${caractere}`);
        setResposta(resp.data.freq);
    }

    return(
        
        <div>
            <h1>Frequencia</h1>
            <div> Insira o texto
                <input type='text' value={texto} onChange={ e=> setTexto(e.target.value)}></input>
            </div>
            <div> Insira o caractere: <input type='text' value={caractere} onChange={ e=> setCaractere(e.target.value)} ></input> </div> 
            <button onClick={verficarFrequencia}> Calcular</button>
            <div> 
                A frequencia do caratere no texto é= {resposta} 
            </div>
        </div>

    );
}