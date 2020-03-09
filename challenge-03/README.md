// Declarar uma variável qualquer, que receba um objeto vazio.
R: Pessoa = {};
-
/* Declarar uma variável `pessoa`, que receba suas informações pessoais. As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão */
R:
    Pessoa.nome = "Jacinto";
    Pessoa.sobrenome = "Pinto";
    Pessoa.sexo = "Masculino";
    Pessoa.idade = 32;
    Pessoa.altura = 1.52;
    Pessoa.peso = 56;
    Pessoa.andando = falso;
    Pessoa.caminhouQuantosMetros = 120;
-
/* Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que for chamado. */
R: Pessoa.fazerAniversario = function () {
    Pessoa.idade = ++Pessoa.idade;
    return Pessoa;
}
-
// Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes características:
// - Esse método deve receber por parâmetro um valor que representará a quantidade de metros caminhados;
// - Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao valor dessa propriedade a quantidade passada por parâmetro;
// - Ele deverá modificar o valor da propriedade `andando` para o valor booleano que representa "verdadeiro";
R: Pessoa.andar = function(metros) {
    if(Number(metros) && metros > 0) {
        Pessoa.andando = "true";
        Pessoa.caminhouQuantosMetros = metros;
    }
    return Pessoa;
}
-
/* Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor da propriedade `andando` para o valor booleano que representa "falso". */
R: Pessoa.parar = function() {
    Pessoa.andando = "falso";
    return Pessoa;
}
-
/* Crie um método chamado `nomeCompleto`, que retorne a frase: "Olá! Meu nome é [NOME] [SOBRENOME]!" */
R: Pessoa.nomeCompleto = function() {
    return "Olá! Meu nome é " + Pessoa.nome + " " + Pessoa.sobrenome + "!";
}
-
/* Crie um método chamado `mostrarIdade`, que retorne a frase: "Olá, eu tenho [IDADE] anos!" */
R: Pessoa.mostrarIdade = function() {
    return "Olá, eu tenho " + Pessoa.idade + " anos!";
}
-
/* Crie um método chamado `mostrarPeso`, que retorne a frase: "Eu peso [PESO]Kg." */
R: Pessoa.mostrarPeso = function() {
    return "Olá, eu peso " + Pessoa.peso + "Kg!";
}
-
/* Crie um método chamado `mostrarAltura` que retorne a frase: "Minha altura é [ALTURA]m." */
R: Pessoa.mostrarAltura = function() {
    return "Olá, eu tenho " + Pessoa.altura + "m!";
}
-
/* Agora vamos brincar um pouco com o objeto criado: Qual o nome completo da pessoa? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada) */
R: Olá! Meu nome é Jacinto Pinto!
-
/* Qual a idade da pessoa? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada) */
R: Tenho 34 anos!
-
/* Qual o peso da pessoa? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada) */
R: Peso 56Kg!
-
/* Qual a altura da pessoa? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada) */
R: Tenho 1.52m!
-
/* Faça a `pessoa` fazer 3 aniversários. */
R: Pessoa.fazerAniversario() x3.
-
/* Quantos anos a `pessoa` tem agora? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada) */
R: Tenho 37 anos!
-
/* Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x, com metragens diferentes passadas por parâmetro. */
R: Pessoa.andar(1500);
-
/* A pessoa ainda está andando? (Use a instrução para responder e comentários inline ao lado da instrução para mostrar qual foi a resposta retornada) */
R: Pessoa.status = function() {
    return "A pessoa esta andando: " + Pessoa.andando;
}
-
// A pessoa esta andando: true
-
/* Se a pessoa ainda está andando, faça-a parar. */
R: 
-
/* E agora: a pessoa ainda está andando? (Use uma instrução para responder e comentários inline ao lado da instrução para mostrar a resposta retornada) */
R: Pessoa.parar()
-
/* Quantos metros a pessoa andou? (Use uma instrução para responder e comentários inline ao lado da instrução para mostrar a resposta retornada) */
R: Pessoa.caminhouQuantosMetros > 1500
-
/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
-
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
R: Pessoa.apresentacao = function() {
    artigo = "";
-
    if(Pessoa.sexo == "Feminino" || Pessoa.sexo == "feminino") {
        artigo = "a";
    }
    if(Pessoa.sexo == "Masculino" || Pessoa.sexo == "masculino") {
        artigo = "o";
    }
    anos = "";
    return  "Olá, eu sou " + artigo + " " + Pessoa.nome + " " + Pessoa.sobrenome + ", tenho " + Pessoa.idade + " anos, " + Pessoa.altura + " metros, meu peso é " + Pessoa.peso  + " e, só hoje, eu já caminhei " + Pessoa.caminhouQuantosMetros + " metros!";
}
-
// Agora, apresente-se ;)
R: Olá, eu sou o Jacinto Pinto, tenho 37 anos, 1.52 metros, meu peso é 56 e, só hoje, eu já caminhei 1500 metros!
