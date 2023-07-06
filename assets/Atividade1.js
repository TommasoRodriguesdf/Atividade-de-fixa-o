//Atividade1

let letra = 3;

if ((letra % 4 === 0 && letra % 100 !== 0) || ( letra % 400 === 0) ){
  console.log('O A é vogal');
} else { 
  console.log('O B é consoante');
}

//Atividade2

let nota = 0;

if (nota === 100){
  console.log('A');
} else if(nota === 80) { 
  console.log('B');
}
 else if (nota === 60) { 
  console.log('C');
}
 else if(nota === 20) { 
  console.log('D');
}
 else if(nota === 0) { 
  console.log('F');
}

//Atividade3

let valor = 10

if (valor % 3 === 0 && valor % 5 === 0){
    console.log('O número ' + valor + ' é divisível por 3 e 5');
} else { 
    console.log('O número ' + valor + ' não é divisível por 3 e 5');
}

//Atividade4

let valor2 = 10

if (valor2 % 2 === 0){
    console.log('É par');
} else { 
    console.log('É impar');
}

//Atividade5

let valor3 = 10;

if (valor3 > 0){
    console.log('É positivo');
} else if( valor3 === 0) { 
    console.log('É a 0');
}else{
  console.log('É negativo');
}

//Atividade6 

let arrayNumeros = [1,2,3]
 function verificaPares(elemento){
      console.log(elemento);
 }   
 arrayNumeros.forEach(verificaPares);
 
//Atividade7

const numeros = [ 'a', 'b', 'c' ]

for(let num of numeros){
 console.log(num);
}

//Atividade8

let dividido = 1;

while(dividido < 100){
  if(dividido % 5=== 0 && dividido % 7=== 0){
    console.log('O número ' + dividido + ' é divisível por 5 e 7');
    break
  }else{
    console.log('O número ' + dividido + ' não é divisível por 5 e 7');
  }
  dividido++;
}

//Atividade9

let pares = 1;

while(pares < 10){
  if(pares % 2 === 0){
    console.log('O número ' + pares + ' é par de 1 a 10');
  }else{
    pares++;
    continue;
  }
  pares++;
}

//Atividade10 

const pessoa ={
 nome:'Lucas Paquetá',
 idade:27,
 cidade:'Campo Grande',
 estados:'Mato Grosso do Sol',
 país:'Brasil'
};
for(let artributo in pessoa){
  console.log(artributo + " : " + pessoa[artributo]);
}

//Atividade11

let dividido2 = 1;

while(dividido2 < 100){
  if(dividido2 % 2=== 0 && dividido2 % 3=== 0 && dividido2 % 5=== 0){
    console.log('O número ' + dividido2 + ' é divisível por 5 e 7');
    break
  }else{
    console.log('O número ' + dividido2 + ' não é divisível por 5 e 7');
  }
  dividido2++;
}

//Atividade12

const nums= [99, 22, 45, 14];

for (let [indice, num9] of nums.entries() ){
 console.log('Numero' + num9 + 'na posição' + indice);

}

//Atividade13

let contador1 = 0;

while(contador1 <= 10 ){
    console.log(contador1);
    contador1 = contador1 + 2
}

//Atividade14

let resposta; 

do {
  resposta = prompt('Digite sim para saída ?');
  } while (resposta !== 'sim');



//Atividade15

const pessoa2 ={
  nome:'Lucas Paquetá',
  idade:27,
  cidade:'Campo Grande',
  estados:'Mato Grosso do Sol',
  país:'Brasil'
 };
 for(let artributo in pessoa2){
   console.log(artributo + " : " + pessoa2[artributo]);
 }
 

//Atividade16

let valor4 = 10

if (valor4 % 3 === 0 && valor4 % 5 === 0){
    console.log('O número ' + valor4 + ' é divisível por 3 e 5');
} else { 
    console.log('O número ' + valor4 + ' não é divisível por 3 e 5');
}

//Atividade17

let pares1 = -1;

while(pares1 < -10){
  if(pares1 % 2 === 0){
    console.log('O número ' + pares1 + ' é par de 1 a 10');
  }else{
    pares1++;
    continue;
  }
  pares1++;
}

//Atividade18



//Atividade19



//Atividade20