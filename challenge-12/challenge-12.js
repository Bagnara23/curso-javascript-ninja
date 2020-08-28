(function() {
  /* Envolva todo o conteúdo desse arquivo em uma IIFE. */

  /* Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo de valor para cada propriedade. */
  let person = {
    name: 'Rodrigo',
    lastname: 'Bagnara',
    age: 26
  }
  console.log( 'Propriedades de "person": ' + Object.keys(person));

  /* Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente. */
  console.log( 'Propriedades do objeto: ' + Object.keys(person));
  

  /* Crie um array vazio chamado `books`. */
  let books = [];

  /* Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  let book = {}
  
  book = { nome: 'Princípios de orientação a objetos com JS', pages: 127 };
  books.push(book);
  
  book = { nome: 'Internet das Coisas', pages: 238 } 
  books.push(book);
  
  book = { nome: 'Raspberry Pi - Descomplicando', pages: 224 } 
  books.push(book);

  /* Mostre no console todos os livros. */ 
  console.log( '\nLista de livros: ' + books);
  for(let indice in books) {
    console.log(books[indice].nome);
  }

  console.log( '\n Livro que está sendo removido:' );
  /* Remova o último livro, e mostre-o no console. */
  let removido = books.pop();
  console.log(removido.nome);

  console.log( '\nAgora sobraram somente os livros:' );
  /* Mostre no console os livros restantes. */
  for(let indice in books) {
    console.log(books[indice].nome);
  }

  /* Converta os objetos que ficaram em `books` para strings. */
  console.log( '\nLivros em formato string:' );
  
  for(let indice in books) {
    books[indice] = Object.keys(books[indice]);
    console.log(books[indice]);
  }

  /* Mostre os livros nesse formato no console: */

  /* Converta os livros novamente para objeto. */
  console.log( '\nAgora os livros são objetos novamente:' );

  /* Mostre no console todas as propriedades e valores de todos os livros, no formato abaixo: "[PROPRIEDADE]: [VALOR]" */

  /* Crie um array chamado `myName`. Cada item desse array deve ser uma letra do seu nome. Adicione seu nome completo no array. */
  console.log( '\nMeu nome é:' );

  /* Juntando todos os itens do array, mostre no console seu nome. */
  // ?

  console.log( '\nMeu nome invertido é:' );

  /* Ainda usando o objeto acima, mostre no console seu nome invertido. */
  // ?

  console.log( '\nAgora em ordem alfabética:' );
  /* Mostre todos os itens do array acima, odenados alfabéticamente. */
  // ?
}());
