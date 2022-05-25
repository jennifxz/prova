import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Frequencia() {
    return(
        <div className="frequencia">
            <h1>Frequencia</h1>
        <p> Qual é a frequencia desse caractere no texto? </p>
            <div> 
            <p> Insira o texto:</p>
            <input> </input>
            </div>
            <div>
            Insira o caractere:
                <input></input>
            </div>
            <p> A frequencia desse caractere no texto é: {} </p>

        </div>
    );
}