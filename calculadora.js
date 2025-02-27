function calculadoraNova(n1, n2, operacao) {
    return operacao(n1, n2);
}
function somarNovo(n1, n2) {
    return n1 + n2;
}
function subtrairNovo(n1, n2) {
    return n1 - n2;
}
function multiplicarNovo(n1, n2) {
    return n1 * n2;
}
function dividirNovo(n1, n2) {
    return n1 / n2;
}
function potenciacaoNovo(n1, n2) {
    return Math.pow(n1, n2);
}
var r1 = calculadoraNova(10, 10, somarNovo);
console.log("Somar 10 + 10: ", r1);
var r2 = calculadoraNova(10, 10, subtrairNovo);
console.log("Subtrair 10 - 10: ", r2);
var r3 = calculadoraNova(10, 10, multiplicarNovo);
console.log("Multiplicar 10 * 10: ", r3);
var r4 = calculadoraNova(10, 10, dividirNovo);
console.log("Dividir 10 / 10: ", r4);
var r5 = calculadoraNova(2, 16, potenciacaoNovo);
console.log("Potenciação 10 ** 10: ", r5);
