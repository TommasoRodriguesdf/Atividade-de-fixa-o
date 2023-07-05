console.log('Olá');

//modo antigp de declarar uma variavel ES5;
var a = 0;

//modo de escrito do novo padrão ES6;
//variavel;
let b = 2;

// valor constante;
const c = 4;

console.log(a);

//Verifique se um determinado numero é possitivo ou nagativo;

  let numero = 5

if (numero > 0) { // quando é verdadeiro;
    console.log('É positivo');
} else { //quando é falso;
    console.log('É negativo');
}

//Verifique se um valor é por uo impor;

let valor = 10

if (valor % 2 === 0){
    console.log('É par');
} else { 
    console.log('É impar');
}

//Determine o maior entre tres números;

let num1 = 10; 
let num2 = 5;
let num3 = 8;
let maior = 0;

if ( num1 >= num2 && num1 >= num3){
  maior =num1;
} else if ( num2 >= num1 && num2 >= num3) { 
  maior = num2;
} else { 
  maior = num3;

}

console.log('O maior número é: ' + maior);

//Verificar se um ano é bissexto;

let ano = 2020;

if ((ano % 4 === 0 && ano % 100 !== 0) || ( ano % 400 === 0) ){
  console.log('O ano é bissexto');
} else { 
  console.log('O ano não é bissexto');
}

// estruturas de repetição;

// while =enquato;

// imprimir os numeros de 1 a 100';

let contador = 1;

while(contador <= 100){
    console.log(contador);
    contador++;
}

//perguntar ao usuário um númerio para exibir no console;

let num4;

do {
num4 = parseInt(prompt('Digite um numero entre 1 e 10'));
} while (num4 < 1 || num4 > 10);

console.log('Você digitou o número' + num4);


//repertição utilizando a estrutura for;
//executando soma;

let soma = 0;

for(let i = 1; i <= 10; i++){
    soma += i;

}

console.log('O valor da soma é ' + soma);


//Iteração sobre array usando for;

const numeros = [ 1, 2, 3, 4, 5,]

for(let num of numeros){
 console.log(num);
}
const pessoa = {
   nome: 'João',
   idade: 25,
   cidade: 'Nova Andradina'
};

for(let artributo in pessoa){
  console.log(artributo + " : " + pessoa[artributo]);
}









