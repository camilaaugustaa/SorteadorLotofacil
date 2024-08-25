let listaDeNumerosSorteados = [];


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTextoNaTela('h1', "Bem vindo ao sorteador da lotofacil!")
}
mensagemInicial()

function sortearNumero(){
    let numeroSorteado = parseInt(Math.random() * 25 + 1);
    return numeroSorteado;
}

function sortearLotofacil() {
    
    while(listaDeNumerosSorteados.length < 15) {
        numeroSorteado = sortearNumero();
        if(!listaDeNumerosSorteados.includes(numeroSorteado)) {
            listaDeNumerosSorteados.push(numeroSorteado);
            } else {
                numeroSorteado = sortearNumero();
            }
        }
        console.log(listaDeNumerosSorteados);
        exibirTextoNaTela('p', listaDeNumerosSorteados.join(', '));
        
} 
document.getElementById('sortear').addEventListener('click', sortearLotofacil); 


function novoSorteio() {
    listaDeNumerosSorteados= [];
    sortearLotofacil();
}





