/* Declare uma variável chamada `sum` e atribua a ela uma função chamada `calculateSum`. A função deve receber dois parâmetros e retornar a soma desses parâmetros. */
let sum = function calculateSum(x, y) {
  return (x+y);
};

/* Invoque a função criada acima, passando dois números que serão somados, e mostre o resultado no console, com a frase: "A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]." */
let x = 3;
let y = 5;
console.log('A soma de ' + x + ' e ' + y + ' é igual a ' + sum(x, y) + '.'); // A soma de 3 e 5 é igual a 8.

/* Mostre no console o nome da função criada acima, com a frase:"O nome da função que faz a soma é [NOME DA FUNÇÃO]." */
console.log('O nome da função que faz a soma é ' + sum.name + '.'); // O nome da função que faz a soma é calculateSum.

/* Crie uma função literal chamada `showName`. Essa função deve retornar o seu nome. */
function showName() {
  return 'showName';
}

/* Declare uma variável chamada `varShowName` que recebe a função criada acima. */
let varShowName = function showName() {
  return 'showName';
}

/* Usando a variável criada acima, mostre no console o nome e o retorno da função atribuída a ela, com a seguinte frase: "A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]." */
console.log('A função ' + varShowName.name + ' retorna ' + varShowName()); // A função showName retorna showName

/* Crie uma função literal chamada `calculator`, que funcione assim:
  - A função deve receber um parâmetro que dirá qual operação matemática ela vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que fará o seguinte:
      - Essa segunda função deve receber dois parâmetros;
      - Esses dois parâmetros serão os operandos usados na operação matemática;
      - O retorno dessa segunda função é a operação matemática completa, com a frase: "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
      - Se o operador não for válido, retornar a frase: "Operação inválida."
*/
function calculator(operacao) {
  if(operacao != '') {
    switch (operacao) {
      case '+':
        return function(x, y) { return (x + y); }
      case '-':
        return function(x, y) { return (x - y); }
      case '*':
        return function(x, y) { return (x * y); }
      case '/':
        return function(x, y) { return (x / y); }
      case '%':
        return function(x, y) { return (x % y); }
      default:
        console.log('Insira uma expressão valida.');
    }
  }
}

/* Declare uma variável chamada `sum`, que receberá a função acima, passando como parâmetro o operador de soma. */
let sum = function calculator(operacao) {
  if(operacao != '') {
    switch (operacao) {
      case '+':
        return function(x, y) { return (x + y); }
      case '-':
        return function(x, y) { return (x - y); }
      case '*':
        return function(x, y) { return (x * y); }
      case '/':
        return function(x, y) { return (x / y); }
      case '%':
        return function(x, y) { return (x % y); }
      default:
        console.log('Insira uma expressão valida.');
    }
  }
}

/* Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela. */
let soma = sum('+');
soma(3, 9); // 12

/* Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`, `division` e `mod`, e atribua a elas a função `calculator`, passando o operador correto por parâmetro para cada uma delas. */
let subtracao = sum('-');
subtracao(10, 5); // 5

let divisao = sum('/');
divisao(10, 5); // 2

let produto = sum('*');
produto(10, 5); // 50

let mod = sum('%');
mod(10, 3); // 1


/* Faça uma operação com cada uma das funções criadas acima, mostrando o resultado no console. */
...
