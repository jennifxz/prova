export function soma (a, b){
    return a + b;
}

export function dobro (a){
    return a * 2;
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

export function corprimaria (color){
    
    
    if(color == "azul"){
        return true;
    }
    else if (color == "amarelo" || "amarela"){
        return true;
    }
    else if(color == "vermelho" || "vermelha"){
        return true;
    }
    else{
        return false;
    }
}

export function ingressocinema (inteiras, meias, dia, filme){

    let ingresso = 28.5;
    let meia = 14.25;
    let filmenacional = 5;
    let totalnacional = (inteiras*filmenacional) + (meias*filmenacional);
    let total = (inteiras*ingresso) + (meias*meia);
    let totalquarta = (meias*meia) + (meias*meias);
    if (filme == "nacional"){
        return totalnacional
    }
    
    else if (dia == "quarta"){
        return totalquarta
    }
    
    else {
        return total
    }
    
}

export function maiornumero (arr){
    
    let x = Math.max(arr);
    
    return x

}

