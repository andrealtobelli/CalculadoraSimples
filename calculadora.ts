function calculadoraNova (n1 : number, n2 : number, 
    operacao : (numero1 : number, numero2 : number) => number) : number {

        return operacao(n1,n2)
}