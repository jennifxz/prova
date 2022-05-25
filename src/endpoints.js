import { Router } from "express";
import {dobro, soma, media, temperatura, tabuada, corPrimaria, Ingresso, maiorNumero, frequencia} from './service.js';
const server = Router();

server.get('dobro/:numero', (req, resp) => {
    try {
        const numero = req.params.numero;
        
        const d = dobro(numero);

        resp.send({
            dobro: d
        });
    }

    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/somar', (req, resp) => {
    try {
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        const x = soma(a, b);
        resp.send({
            soma: x
        });
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/somar', (req, resp) => {
    try {
        const { valores: { a, b } } = req.body;

        const x = soma(a, b);

        resp.send({
            soma: x
        });
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }

})

server.post('/media', (req, resp) => {
    try {
        const { valores: { a, b, c } } = req.body;
        const x = media(a, b, c);

        resp.send({
            media: x
        });
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/temperatura', (req, resp) => {
    try{
        const t = Number(req.query.t);
        const x = temperatura(t);

        resp.send({
            temperatura: x
        });
    }
    catch(err) {
        resp.status(404).send({
            erro: err.message
        });
    }
})

server.get('/tabuada', (req, resp) => {
    try{
        const  num = Number(req.query.t);
        const x = tabuada(num);

        resp.send({
            tabuada : x
        });
    }
    catch(err){
        resp.status(404).send({
            erro:err.message
        });
    }
})

server.get ('/corPrimaria/:cor', (req, resp) => {
    try {

        const cor = req.params.cor;
        const x = corPrimaria(cor);

        resp.send({
            corPrimaria : x
        });


    } catch (err) {
        resp.status(404).send({
            erro:err.message
        });
    }

})

server.get ('/frequencia/:texto/:caractere', (req, resp) => {
    try {
        const { texto, caractere } = req.params;
        const freq = frequencia( texto, caractere);
        resp.send({
            freq: freq
        });
    } catch (err) {
        resp.send({
            erro: err.message
        });
    }
})

server.post('/Ingresso', (req,resp) =>{
    try {
        const { qtdInteiras, qtdMeias, diaSemana, nacionalidade} = req.body;
        const total = Ingresso(qtdInteiras, qtdMeias, diaSemana, nacionalidade);

        resp.send({
            total: total
        });
        
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        });
    }
})

server.post('/maiorNumero', (req, resp) =>{
    try {
        const numeros = req.body;
        const maior = maiorNumero(numeros);

        resp.send({
            maior : maior
        });

    } catch (err) { 
        resp.status(404).send({
            erro:err.message
        });
    }
})

server

export default server;
