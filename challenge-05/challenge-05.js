/* Crie uma variável qualquer, que receba um array com alguns valores aleatórios - ao menos 5 - (fica por sua conta os valores do array). */
let valueArray = ['abacate', 22, 3.14, true, "Guacamole"];

/* Crie uma função que receba um array como parâmetro, e retorne esse array. */
function functionOne(array) {
    return array;
};

functionOne(valueArray); //["abacate", 22, 3.14, true, "Guacamole"]

/* Imprima o segundo índice do array retornado pela função criada acima. */
functionOne(valueArray)[1]; // 22

/* Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o segundo, um número. A função deve retornar o valor de um índice do array que foi passado no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo p râmetro.*/
let valuesArray = ['A', 'B', 'C', 'D', 'E', 'F'];

function functionTwo(valuesArray,number) {
    return valuesArray[number];
};

functionTwo(valuesArray, 0); // "A"

/* Declare uma variável que recebe um array com 5 valores, de tipos diferentes. */
let valuesArray = ['A', 1, true, null, 'texo', 0]; // ["A", 1, true, null, "texo", 0]

/* Invoque a função criada acima, fazendo-a retornar todos os valores do último array criado. */
function functionThree(valuesArray) {
    return valuesArray;
};

functionThree(valuesArray); // ["A", 1, true, null, "texo", 0]

/* Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do livro. Dentro dessa função, declare uma variável que recebe um objeto com as seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos os livros.
*/
function book(livroName) {
    let allBooks = {
        'segredo do ninja javascript': {qtd_paginas: 488, autor: 'John Resig & Bear Bibeault', editora: 'Novatec'},
        'manga naruto': {qtd_paginas: 220, autor: 'Masashi Kishimoto', editora: 'Viz'},
        'livro do cla das sombras': {qtd_paginas: 450, autor: 'Altier Macob', editora: 'Zucco'}
    }
    
    // allBooks.propriedade = (Com o ponto é possivel acessar diretamente a propriedade de um objeto).
    // arrays em js podem ser compreendidos como objetos, tendo como propriedades seus indices.
    
    return !livroName ? allBooks : allBooks[livroName];
}

/* Usando a função criada acima, imprima o objeto com todos os livros. */
book() // Ok

/* Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer, usando a frase: "O livro [NOME_DO_LIVRO] tem [X] páginas!" */
console.log("O livro Manga de Naruto tem " + book('manga naruto').qtd_paginas + " páginas."); // O livro Manga de Naruto tem 220 páginas.

/* Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando a frase: "O autor do livro [NOME_DO_LIVRO] é [AUTOR]." */
console.log("O autor do livro do cla das sombras é " + book('livro do cla das sombras').autor + "."); // O autor do livro do cla das sombras é Altier Macob.

/* Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando a frase: "O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]." */
console.log("O livro segredo do ninja javascript foi publicado pela editora " + book('segredo do ninja javascript').editora + "."); // O livro segredo do ninja javascript foi publicado pela editora Novatec.
