(function() {
  /* Envolva todo o código desse desafio em uma IIFE.
  Crie um arquivo chamado index.html e adicione esse script ao HTML. */

  /* Crie uma função construtora chamada "Person". Esse construtor deve ter as seguintes características:
  - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
  - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
  - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
      - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo iremos passar um único argumento,
    que é a quantidade de anos que devem ser adicionados à idade original (age).
    Esse método deverá retornar o objeto que será instanciado. */
  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    
    this.getFullName = function() {
      return this.name + ' ' + this.lastName;
    };
    
    this.getAge = function() {
      return this.age;
    };
    
    this.addAge = function(add) {
      if(Number.isInteger(add)) {
        this.age += add;
        return this.age;
      } else {
        return 'Parâmetro inválido!';
      }
    };
  }

  /* Crie 3 novos objetos usando o construtor acima. Os objetos serão novas pessoas.
  As variáveis deverão ser o primeiro nome da pessoa. Passe os parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa). */
  console.log( 'Novas pessoas criadas à partir de Person:' );
  let pessoa1 = new Person('Rodrigo', 'Bagnara', 26);
  let pessoa2 = new Person('Antonio', 'Rodrigues', 31);
  let pessoa3 = new Person('Vicente', 'Capeletto', 12);

  /* Mostre no console o nome completo de cada pessoa. */
  console.log( '\nNomes das pessoas:' );
  pessoa1.getFullName(); // Rodrigo Bagnara
  pessoa2.getFullName(); // Antonio Rodrigues
  pessoa3.getFullName(); // Vicente Capeletto

  /* Mostre no console as idades de cada pessoa, com a frase: "[NOME COMPLETO] tem [IDADE] anos." */
  console.log( '\nIdade das pessoas:' );
  console.log(pessoa1.getFullName() + ' tem ' + pessoa1.getAge() + ' anos.'); // Rodrigo Bagnara tem 26 anos.
  console.log(pessoa2.getFullName() + ' tem ' + pessoa2.getAge() + ' anos.'); // Antonio Rodrigues tem 31 anos.
  console.log(pessoa3.getFullName() + ' tem ' + pessoa3.getAge() + ' anos.'); // Vicente Capeletto tem 12 anos.

  /* Adicione alguns anos à cada pessoa, e mostre no console a nova idade de cada um.
  A frase deverá ser no formato: "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log( '\nNova idade das pessoas:' );
  pessoa1.addAge(4);
  pessoa2.addAge(2);
  pessoa3.addAge(10);
  
  console.log(pessoa1.getFullName() + ' agora tem ' + pessoa1.getAge() + ' anos.'); // Rodrigo Bagnara agora tem 30 anos.
  console.log(pessoa2.getFullName() + ' agora tem ' + pessoa2.getAge() + ' anos.'); // Antonio Rodrigues agora tem 33 anos.
  console.log(pessoa3.getFullName() + ' agora tem ' + pessoa3.getAge() + ' anos.'); // Vicente Capeletto agora tem 22 anos.
  
  
}());
