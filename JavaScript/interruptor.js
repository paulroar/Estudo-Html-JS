let desligado = true;

function interruptor() {
    // se estiver desligado => ligar a luz:

    if (desligado === true) {

        document.querySelector('img').src = 'imagens/58c9d465-5f64-40b1-8068-b69714438a3c.jpg';
        desligado = false;
    }



    else {

        document.querySelector('img').src = 'imagens/e3e59edb-14e2-4c98-b843-84fecd56d475.jpg';
        desligado = true;

    }




    // se estiver ligado => desligar a luz:



}