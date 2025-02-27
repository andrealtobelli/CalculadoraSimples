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

let r1 = calculadoraNova( 10,10,somarNovo)
console.log("Somar 10 + 10: ", r1);

let r2 = calculadoraNova( 10,10,subtrairNovo)
console.log("Subtrair 10 - 10: ", r2);

let r3 = calculadoraNova( 10,10,multiplicarNovo)
console.log("Multiplicar 10 * 10: ", r3);

let r4 = calculadoraNova( 10,10,dividirNovo)
console.log("Dividir 10 / 10: ", r4);

let r5 = calculadoraNova( 2,16,potenciacaoNovo)
console.log("Potenciação 10 ** 10: ", r5);