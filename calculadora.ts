function calculadoraNova (n1 : number, n2 : number, 
    operacao : (numero1 : number, numero2 : number) => number) : number {

        return operacao(n1,n2)
}

function somarNovo (n1 : number, n2 : number) : number{
    return n1 + n2
}

function subtrairNovo (n1 : number, n2 : number) : number{
    return n1 - n2
}

function multiplicarNovo (n1 : number, n2 : number) : number{
    return n1 * n2
}

function dividirNovo (n1 : number, n2 : number) : number{
    return n1 / n2
}

function potenciacaoNovo (n1 : number, n2 : number) : number{
    return n1 ** n2
}