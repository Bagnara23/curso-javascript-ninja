(function() {
  /* Envolva todo o código desse desafio em uma IIFE. */

  /* Crie um array e mostre no console a representação em String desse array, usando o método visto na aula 13. */
  let arr = ['Teste'];
  console.log( 'O array em formato de string é: ' + arr.toString());

  /* Crie 2 arrays 'sul' e 'sudeste', que serão as regiões do Brasil. Cada array deve conter os estados dessa região. */
  let sul = ['Rio Grande do Sul', 'Santa Catarina', 'Paraná'];
  let sudeste = ['Rio de Janeiro', 'São Paulo', 'Minas Gerais', 'Espírito Santo'];

  /* Crie uma variável chamada 'brasil', que irá receber as duas regiões concatenadas. Mostre o 'brasil' no console. */
  let brasil = sul.concat(sudeste);
  console.log( '\nAlguns Estados do Brasil: ' + brasil);

  /* Adicione 3 novos estados da região Norte no início do array e mostre no console. */
  let norte = ['Acre', 'Amazonas', 'Pará'];
  brasil = norte.concat(brasil);
  console.log( '\n Mais estados adicionados: ' + brasil);

  /* Remova o primeiro estado do array 'brasil' e mostre-o no console. */
  console.log( '\n Estado removido: ' + brasil.shift());

  /* Crie um novo array chamado 'newSul', que receba somente os estados do sul, pegando do array 'brasil'.
  Não remova esses itens de 'brasil'. */
  let newSul = [];
  
  brasil.forEach(function( item, indice, array) {
    if(item == 'Rio Grande do Sul' || item == 'Santa Catarina' || item == 'Paraná') {
      newSul.push(item);
    }
  });

  /* Mostre no console os estados que estão em 'newSul'. */
  console.log( '\nEstados do Sul do Brasil: ' + newSul);

  /* Mostre no console todos os estados que estão em 'brasil'. */
  console.log( '\nAlguns Estados do Brasil: ' + brasil.toString(', '));

  /* Crie um novo array chamado 'nordeste', que tenha os estados do nordeste. */
  let nordeste = ['Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba', 'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia'];

  /* Mostre no console os estados do nordeste. */
  console.log( '\n Estados do Nordeste: ' + nordeste.toString(', '));
  
  brasil = ["Amazonas", "Pará", "Rio Grande do Sul", "Santa Catarina", "Paraná", "Rio de Janeiro", "São Paulo", "Minas Gerais", "Espírito Santo"];

  /* Remova de 'brasil' os estados do 'sudeste', colocando-os em uma variável chamada 'newSudeste'. */
  let newSudeste = [];
  let indiceRemove = 0;
  brasil.forEach(function( item, indice, array) {
    if(sudeste.indexOf(item) > -1) {
      newSudeste.push(item);
      indiceRemove ? indiceRemove = indiceRemove : indiceRemove = indice;
    }
  });
  
  if(indiceRemove) {
     brasil.splice(indiceRemove, newSudeste.length);
  }
  
  console.log(brasil);
  console.log(newSudeste);

  /* Adicione os estados do 'nordeste' ao array 'brasil'. Esses estados devem
  ficar no mesmo nível que os estados já existentes, não em um array separado. */
  brasil = brasil.concat(nordeste);
  
  /* Mostre no console os estados em 'newSudeste'. */
  console.log( '\n Estados em newSudeste: ' + newSudeste);

  /* Mostre no console os estados do 'brasil'. */
  console.log( '\n Alguns estados do Brasil: ' + brasil);

  /* Usando forEach, percorra o array 'brasil' e gere um novo array chamado 'newBrasil'.
  Esse array deve ter cada item como um objeto, com as propriedades:
  - 'id': que será o índice do array 'brasil',
  - 'estado': que será o estado do array 'brasil'. */

  /* Mostre o array 'newBrasil' no console */
  console.log( '\nnewBrasil:' );


  /* Percorra o array 'brasil' e verifique se os estados tem mais de 7 letras cada, atribuindo o resultado à uma variável.
  Se tiver, mostre no console a frase: "Sim, todos os estados tem mais de 7 letras!"
  Senão, mostre no console: "Nem todos os estados tem mais de 7 letras!" */
  console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );

  /* Percorra o array 'brasil' e verifique se o Ceará está incluído, atribuindo o resultado à uma variável. 
  Se esse estado existir no array, mostrar a frase no console: "Ceará está incluído!"
  Senão, mostrar a frase: "Ceará não foi incluído :(" */
  console.log( '\nCeará está incluído em `brasil`?' );
  // ?

  /* Percorra o array 'newBrasil' e crie um novo array que some 1 no ID de cada objeto desse array, 
  e adicione a frase abaixo na propriedade 'estado': "[ESTADO] pertence ao Brasil."
  Atribua o novo array a uma variável chamada 'map'. */

  /* Mostre no console o array criado acima: */
  console.log( '\n newBrasil agora com mais informações: ' + );

  /* Filtre o array criado acima, retornando somente os estados que tiveremID par. Atribua o valor à uma variável chamada 'filter'. */

  /* Mostre o array filtrado acima no console. */
  console.log( '\n Estados com ID par: ' + );
  
})();
