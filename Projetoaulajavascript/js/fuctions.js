//Manipulação dos objetos Dom (document Object Model)
//Representação de dados dos objetos que compões uma estrutura e um documento web

//essencial para interagir com elementos de uma página 
//Document.querySelector()

//Exemplo:

const titulo = document.querySelector('h1');
titulo.textContent = 'Texto modificado'; //modifica o texto do elemento 
// Uso principal: busca e modificar elementos 

//============================================================

//Document.createElement()
// Cria novos elementos dinamicos 

//Exemplo:

const novoElemento = document.createElement('p');
novoElemento.textContent = 'Parágrafo Adicionado'
document.body.appendChild(novoElemento);
//uso principal: Adicionar novos elementos ao Dom

//================================================================

//addEventListener()
//Funções que lidam com interações dos uruarios 
//Sua função é adicionar um ouvinte para eventos (como cliques)

const botao = document.querySelector('button');
botao.addEventListener('click', () => {
    alert('Botão clicado!');
}
); 
//Uso principal: Criar interatividade, com cliques ou movimentos do mouse 

//================================================================

//removeEventListener()
//Remove um ouvinte de evento previamente adicionado.
//Exemplo:
    function mensagem(){
        console.log('Evento Disparado');
    }
    botao.addEventListener('click', mensagem);
    botao.removeEventListener('click', mensagem);
//Uso principal: Remover eventos quando não são mais necessários.

//================================================================

//setTimeout()
//controlam ações que ocorrem em intervalos ou após um tempo
//Executa uma função após um periodo de tempo (unidade de medida > milisegundo)

setTimeout(() => {
    alert('Executado após 2 segundos');
}, 2000); 
//alert > ele executa o toString do Objeto e apresenta em tela 
//console.log > registra a informação no console do navegador, ficando restrita ao conhecimento do desenvolvedor 
//Uso principal: atrasar execusões ou criar temporizadores 

//================================================================

//setInterval()
//Executa uma função repetidamente em intervalos regulares.
//Exemplo:
const intervalo = setInterval(() => { console.log('Executando a cada 1 segundo');
}, 1000);
// Para parar o intervalo
setTimeout(() => clearInterval(intervalo), 5000);
//Uso principal: Atualizações periódicas, como animações ou relógios.

//================================================================

//Manipulação de Arrays
//map()
//Cria um novo array aplicando uma função a cada elemento do array original.
//Exemplo:
const numeros1 = [1, 2, 3];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6]
//Uso principal: Transformar arrays.

//================================================================

//filter()
//Filtra os elementos que atendem a uma condição.
//Exemplo:
const numeros2 = [10, 20, 30];
const maioresQue15 = numeros.filter(num => num > 15);
console.log(maioresQue15); // [20, 30]
//Uso principal: Criar subarrays baseados em critérios.

//================================================================

//reduce()
//Reduz o array a um único valor.
//Exemplo:
const numeros3 = [1, 2, 3];
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0); console.log(soma); // 6
//Uso principal: Acumular valores, como somas ou concatenações.

//================================================================

//forEach()
//Itera por cada elemento de um array.
//Exemplo:
const frutas = ['maçã', 'banana', 'laranja']; frutas.forEach(fruta =>
console.log(fruta));
//Uso principal: Executar ações em cada item de uma lista.

//================================================================

// SON.parse() e JSON.stringify()
// JSON.parse() : Converte uma string JSON em um objeto
// JSON.stringify() : Converte um objeto em uma string JSON
//Exemplo:
const json = '{"nome":"Ana","idade":30}'; const obj = 
JSON.parse(json); console.log(obj.nome); // "Ana"
const novoJson = JSON.stringify(obj); console.log(novoJson); //
'{"nome":"Ana","idade":30}'
//Uso principal: Manipular dados enviados/recebidos por APIs.

//================================================================

//fetch()
//Realiza requisições HTTP.
//Exemplo:
fetch('https://api.exemplo.com/dados')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));
//Uso principal: Obter ou enviar dados para servidores

//================================================================

//if/else
//Executa código com base em condições.
//Exemplo:
const idade = 18; if (idade
>= 18) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
}
//Uso principal: Tomar decisões no código.

//================================================================

//switch
//Seleciona uma entre várias opções com base em um valor.
//Exemplo:
const cor = 'vermelho'; switch
(cor) {
    case 'vermelho':
        console.log('Pare!'); break;
    case 'amarelo':
        console.log('Atenção!'); break;
    case 'verde': console.log('Siga!');
        break;
    default:
        console.log('Cor inválida');
}
//Uso principal: Substituir vários if/else aninhados.

//================================================================

//Manipulação de Strings
//toUpperCase()
//Converte uma string para letras maiúsculas.
//Exemplo:
const texto = 'olá'; console.log(texto.toUpperCase()); // 'OLÁ'
//Uso principal: Padronizar entrada de usuário.

//================================================================

//toLowerCase()
//Converte uma string para letras minúsculas.
//Exemplo:
const texto2 = 'OLÁ'; console.log(texto.toLowerCase()); // 'olá'
//Uso principal: Padronizar comparacões de strings.

//================================================================

//includes()
//Verifica se uma string contém outra.
//Exemplo:
const frase = 'JavaScript é incrível';
console.log(frase.includes('incrível')); // true
//Uso principal: Procurar substrings dentro de uma string.

//==============================================================
//Estruturas de Dados Modernas
//Map
//Uma coleção de pares chave-valor.
//Exemplo:
const mapa = new Map();
mapa.set('nome', 'João');
console.log(mapa.get('nome')); // 'João'
//Uso principal: Armazenar dados com chaves associadas.

//================================================================

//Set
//Armazena valores únicos, sem repetições.
//Exemplo:
const conjunto = new Set([1, 2, 2, 3]);
console.log(conjunto); // Set { 1, 2, 3 }
//Uso principal: Garantir que não haja valores duplicados.

//================================================================

//Outras Funções Utilitárias
//Math.random()
//Gera um número aleatório entre 0 e 1.
//Exemplo:
const aleatorio = Math.random();
console.log(aleatorio);
//Uso principal: Geração de números aleatórios.

//================================================================

//Math.floor()
//Arredonda um número para baixo.
//Exemplo:
const numero = 4.7; console.log(Math.floor(numero)); // 4
//Uso principal: Arredondar valores para inteiros.

//================================================================

// Lucas Pontes de Freitas
// RA: 190437
// RA em Hexadecimal: 0x2E7E5