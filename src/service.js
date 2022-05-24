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

export function corprimaria (cor){
    if(cor == azul){
        return true
    }
    else if (cor == amarelo){
        return true
    }
    else if(cor == vermelho)
}

