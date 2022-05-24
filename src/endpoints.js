import { Router } from "express";
import { dobro, soma, media, temperatura, tabuada, corprimaria} from './service.js';
const server = Router();

server.get('dobro/:numero', (req, resp) => {
    try {

        const numero = Number(req.params.numero);
        const dobro = numero * 2;

        resp.send({
            dobro: dobro
        });
    }

    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/dobro', (req, resp) => {
    try {
        const numero = Number(req.query.numero);
        const x = dobro(numero);

        resp.send({
            dobro: x
        });
    }
    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
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

server.get('corprimaria/:cor', (req, resp) => {
    try {

        const cor = req.params.cor;
    
    
        resp.send({
            corprimaria: cor
        });
    }

    catch (err) {
        resp.status(404).send({
            erro: err.message
        })
    }
})



export default server;
