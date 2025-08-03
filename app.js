let listaDeAmigos = [];

function editarTextoId(id, texto) {
    let parametro = document.getElementById(id);
    parametro.innerHTML = texto;
}

function editarTextoElemento(elemento, texto) {
    let parametro = document.querySelector(elemento);
    parametro.innerHTML = texto;
}

function apagarValores(elemento) {
    let parametro = document.querySelector(elemento);
    parametro.value = '';
}

function adicionarAmigo() {
    atribuirAmigo();
    let listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = '';

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = listaDeAmigos[i];

        // Cria um novo elemento <li> para cada amigo
        let listItem = document.createElement('li');
        listItem.textContent = amigo; // Define o texto do <li> como o nome do amigo
        // Adiciona o <li> à lista no HTML
        listaAmigosElement.appendChild(listItem);
    }
}

function atribuirAmigo() {
    let nome = document.querySelector('input').value;
    
    if (listaDeAmigos.includes(nome)) {
        alert('Esse nome já foi inserido!!!');
    } else if (nome === '') {
        alert('Não há nada para ser inserido!');
    } else {
        listaDeAmigos.push(nome);
    }

    apagarValores('input');

    console.log(listaDeAmigos);
}

function sortearAmigo() {
    let quantidadeLista = listaDeAmigos.length;

    if (listaDeAmigos.length === 0){
        alert('Sem nomes suficientes!');
        return;
    }

    let indiceAmigo = Math.floor((Math.random() * quantidadeLista));
    let resultado = listaDeAmigos[indiceAmigo];

    let textoResultado = `O escolido foi: ${resultado}!`;

    editarTextoId('resultado', textoResultado);
    console.log(textoResultado);
}
 


