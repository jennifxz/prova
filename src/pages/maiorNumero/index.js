import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function MaiorNumero() {
    const [numeros, setNumeros] = useState([])
    const [numero, setNumero] = useState(0)
    const [resposta, setResposta] = useState('')

    const adicionarNumero = _ => {
        setNumeros([...numeros, numero])
        setNumero(0)
    }

    const verificarMaior = async _ => {
        const resp = await axios.post('http://localhost:5000/dia2/maiorNumero', numeros)
        setResposta(resp.data.maior)
    }

    return(
        <div className="maiorNumero">
            <h1>Maior Numero</h1>
            <section>
                <div>Numero: <input type="text" value={numero} onChange={e => setNumero(Number(e.target.value))} /></div>
                <div><button onClick={adicionarNumero} >Adicionar numero</button></div>
                <div>
                    {numeros.map(item => 
                        <div> {item} </div>
                    )}
                </div>
                <div>
                    <p><button onClick={verificarMaior}>Verificar</button> O maior numero é: {resposta}</p>
                </div>
            </section>
        </div>
    );
}