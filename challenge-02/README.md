# Desafio da semana #2
```js

/* Crie uma função que receba dois argumentos e retorne a soma dos mesmos. */
function soma(x, y) {
    return (x + y);
}

/* Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função. */
var  x = soma(2,3) + 5;

/* Qual o valor atualizado dessa variável? */
R: 10

/* Declare uma nova variável, sem valor. */
R: var abacate;

// Crie uma função que adicione um valor à variável criada acima, e retorne a string:m
// O valor da variável agora é VALOR.
// Onde VALOR é o novo valor da variável.
function somaDescrita(x, y){
    retorno = "O valor da variável agora é " + (x + y);
    return retorno;
}

/* Invoque a função criada acima. */
R: var y = somaDescrita(x, 3);

/* Qual o retorno da função? (Use comentários de bloco). */
R: O valor da variável agora é 13

// Crie uma função com as seguintes características:
// 1. A função deve receber 3 argumentos;
// 2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
// Preencha todos os valores corretamente!
// 3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
function tresMultipla(x, y, z) {
    if(x == undefined || x == "" || y == undefined || y == "" || z == undefined || z == "") {
        retorno = "Preencha todos os valores corretamente!";
    } else {
        retorno = (x*y*z) + 2;
    }
    return retorno;
}

/* Invoque a função criada acima, passando só dois números como argumento. */
R: var z = tresMultipla(1, 2);

/* Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado). */
R: Preencha todos os valores corretamente!

/* Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários. */
R: var z = tresMultipla(1, 2, 3);

/* Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado). */
R: 8

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

function tresMultipla(x, y, z) {
    if(!x && !y && !z) {
        retorno = false;
    } else if(x && !y && !z) {
        retorno = x;
    } else if(x && y && !z) {
        retorno = x+y;
    } else if(x && y && z) {
        retorno = (x+y)/z;
    } else {
        retorno = 'null';
    }
    return retorno;
}
-
/* Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação. */

    z = tresMultipla();
        false
    z = tresMultipla(1);
        1
    z = tresMultipla(1,2);
        3
    z = tresMultipla(1,2,3);
        1
    z = tresMultipla(1,2,3,4);
        1
    z = tresMultipla(1,"",3);
        "null"
