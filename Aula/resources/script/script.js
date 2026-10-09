// estrutura de decisão if, else if e else 

    // revisão 
    // o que é uma variável?
    // quais são os tipos de variáveis 
    // comando de entrada e saída de dados 

    // console.log("Olá mundo")
    // let nome = prompt("digite seu nome")
    // alert("seu nome é" .concat(nome))

    // let num1 =5
    // let num2 = "5"

    // let logico = num1 === num2

    // console.log(logico)
    // // tipo logico

    // let maiorDeldade = true
    // if(maiorDeldade){
    //     console.log("você é maior de idade");
    // }
    // else{
    //      console.log("você é menor de idade");
    // }

//     let idadeUsuario = Number(prompt ("digite a sua idade"));

// if (idadeUsuario>= 19) {
//     console.log("Maior de idade");
// }
//  else {
//     console.log("Menor de idade");
// }
// let valor = Number(prompt("Digite um valor monetário:"));

// if (valor > 10) {
//     console.log("Seu saldo é positivo!");
// } 
// else if (saldo === 0){

// }

// else{ 
//     console.log("Está com dívidas!");
//  }
let idade = Number(prompt("Digite sua idade:"));
if( idade  < 12 ){
console.log("Você é uma criança.")
}
 else if (idade < 18) {
    console.log("Você é um adolescente.");
}
 else if (idade < 60) {
    console.log("Você é um adulto.");
} else {
    console.log("Você é um idoso.");
}
 