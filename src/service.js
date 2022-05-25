export function soma (a, b){
    return a + b;
}

export function dobro (numero){
    return numero * 2;
}

export function media (a, b, c){
    return (a + b + c) / 3;
}

export function temperatura (t){
    
    if(t >= 37){
        return true;
    }

    else{
        return false;
    }
}

export function tabuada (num){

    let vezes = new Array(num)

    for(let i = 1; i<=num; i++ ){
        vezes[i] =  num + i 
    }
    return vezes;
}

export function corPrimaria (cor){
    
    if(cor == 'azul' || cor == 'amarelo' || cor == 'vermelho'){
        return true
    }
    else{
        return false
    }
    
    
}

export function frequencia(texto, caractere) {
    let qtd = 0;
    for (let letra of texto){
        if(letra==caractere)
            qtd++
    }
    return qtd;
}

export function Ingresso (qtdInteira, qtdMeia, diaSemana, nacionalidade){
    if(nacionalidade.toLowerCase() == 'brasileira')
        return (qtdInteira + qtdMeia) * 5;

    else if (diaSemana.toLowerCase() == 'quarta')
        return (qtdInteira + qtdMeia) * 14.25;
    
    else 
        return (qtdInteira * 28.5) + (qtdMeia * 14.25);
    
    
}

export function maiorNumero (numeros){
    
    let maior = Number.MIN_VALUE;
    for(let item of numeros){
        if (item > maior)
        maior = item;
    }
    
    return maior

}

