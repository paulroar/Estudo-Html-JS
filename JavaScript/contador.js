let contador = 0;

function incrementarContador() {
    contador = contador + 1;

    let mensagem = "";

    if (contador === 1) {
        mensagem = " 1 vez."
    } else {
        mensagem = contador + " vezes.";        
    }

    document.querySelector('span').textContent = mensagem;

}