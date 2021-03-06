# Desafio da semana #4

```js

/* Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe um único parâmetro como argumento. Essa função deve retornar `true` se o equivalente booleano para o valor passado no argumento for `true`, ou `false` para o contrário. */
let isTruthy = function(valor) {
    return !!valor ? 'true' : 'false';
}

/* Invoque a função criada acima, passando todos os tipos de valores `falsy`. */
isTruthy(0); // false
isTruthy(-0); // false
isTruthy(''); // false

/* Invoque a função criada acima passando como parâmetro 10 valores `truthy`. */
isTruthy(1); // true
isTruthy(2); // true
isTruthy(3); // true
isTruthy(4); // true
isTruthy(5); // true
isTruthy('a'); // true
isTruthy('b'); // true
isTruthy('c'); // true
isTruthy('d'); // true
isTruthy('e'); // true


/* Declare uma variável chamada `carro`, atribuindo à ela um objeto com as seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
let carro = {
    marca: 'BMW',
    modelo: '330',
    placa: 'INA-7266',
    ano: 2019,
    cor: 'cinza',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/* Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor passado por parâmetro. */
carro.mudarCor = function(color) {
    if(color != '')
        carro.cor = color;
}

/* Crie um método chamado `obterCor`, que retorne a cor do carro. */
carro.obterCor = function() {
    return carro.cor;
}

/* Crie um método chamado `obterModelo` que retorne o modelo do carro. */
carro.obterModelo = function() {
    return carro.modelo;
}

/* Crie um método chamado `obterMarca` que retorne a marca do carro. */
carro.obterMarca = function() {
    return carro.marca;
}

/* Crie um método chamado `obterMarcaModelo`, que retorne: "Esse carro é um [MARCA] [MODELO]". Para retornar os valores de marca e modelo, utilize os métodos criados. */
carro.obterMarcaModelo = function() {
    return "Esse carro é um " + carro.marca + ' ' + carro.modelo;
}

/* Crie um método que irá adicionar pessoas no carro. Esse método terá as seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse número não precisa encher o carro, você poderá acrescentar as pessoas aos poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por parâmetro for ultrapassar o limite de assentos do carro, então você deve mostrar quantos assentos ainda podem ser ocupados, com a frase: "Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno citado acima, no lugar de "pessoas".
*/
carro.addPessoas = function(qtd) {
    if(!isNaN(qtd) && qtd >= 1 && qtd <= 5) {
        let vagas = carro.assentos - carro.quantidadePessoas;
        
        if(vagas > qtd) {
            carro.quantidadePessoas += qtd;
            return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
        } else if(vagas < qtd) {
            pessoasDeAzar = qtd - vagas;
            carro.quantidadePessoas += vagas;
            return "O carro já está lotado! " + pessoasDeAzar + " ficaram sem carona!";
        } else if(vagas == qtd) {
            carro.quantidadePessoas += qtd;
            let atualizaVagas = carro.assentos - carro.quantidadePessoas;
            return "O carro já está lotado! Temos " + carro.quantidadePessoas + " passageiros."
        } 
    } else {
        return "Parâmetro incorreto, entre com uma quantidade valida!";
    }
}

/* Agora vamos verificar algumas informações do carro. Para as respostas abaixo, utilize sempre o formato de invocação do método (ou chamada da propriedade), adicionando comentários _inline_ ao lado com o valor retornado, se o método retornar algum valor.

Qual a cor atual do carro? */
carro.obterCor() // cinza

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho")

// E agora, qual a cor do carro?
carro.obterCor() // vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo")

// E agora, qual a cor do carro?
carro.obterCor() // verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo() // Esse carro é um BMW 330

// Adicione 2 pessoas no carro.
carro.addPessoas(2) // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4) // O carro já está lotado! 1 ficaram sem carona!

// Faça o carro encher.
carro.addPessoas(5) // O carro já está lotado! 5 ficaram sem carona!

// Tire 4 pessoas do carro.
carro.quantidadePessoas = carro.quantidadePessoas - 4; // 1

// Adicione 10 pessoas no carro.
carro.addPessoas(10) // Parâmetro incorreto, entre com uma quantidade valida!

// Quantas pessoas temos no carro?
carro.quantidadePessoas // 1

```
