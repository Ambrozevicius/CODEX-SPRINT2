//login
var pinInserido = "";
const pinCorreto = "1234";

const dots = document.querySelectorAll('.ponto');

function atualizarDots() {
    dots.forEach((dot, index) => {
        if (index < pinInserido.length) {
            dot.classList.add('cheio');
        } else {
            dot.classList.remove('cheio');
        }
    });
}

function validarPin() {
    if (pinInserido === pinCorreto) {
        window.location.href = 'tela_inicial.html';
    } else {
        alert('PIN incorreto! Tente 1234');
        pinInserido = '';
        atualizarDots();
    }
}

function addNumber(num) {
    if (pinInserido.length < 4) {
        pinInserido += num;
        atualizarDots();
    }

    if (pinInserido.length === 4) {
        setTimeout(validarPin, 200);
    }
}

function deleteNumber() {
    pinInserido = pinInserido.slice(0, -1);
}

window.addNumber = addNumber;
window.deleteNumber = deleteNumber;


    // Botoes na tela 
const botoesCamera = document.querySelectorAll('.toggle-camera');

if (botoesCamera.length > 0) {
    botoesCamera.forEach(botao => {
        botao.addEventListener('click', () => {
            botao.classList.toggle('ativo');
        });
    });
}

    //EFEITO FLASH NA CAMERA

const botaoFoto = document.querySelector('.botao-foto');

if (botaoFoto) {
    botaoFoto.addEventListener('click', () => {

        const flashTela = document.createElement('div');

        flashTela.style.position = 'fixed';
        flashTela.style.top = '0';
        flashTela.style.left = '0';
        flashTela.style.width = '100%';
        flashTela.style.height = '100%';
        flashTela.style.backgroundColor = 'white';
        flashTela.style.opacity = '0.8';
        flashTela.style.zIndex = '9999';

        document.body.appendChild(flashTela);

        setTimeout(() => {
            flashTela.remove();
        }, 150);
    });
}



// sistema de gravacao de video
const botaoGravar = document.querySelector('.modo-video');

let gravando = false;
let segundos = 0;
let intervalo;

//Contador da gravação
if (botaoGravar) {

    const contador = document.createElement('p');
    contador.innerText = '00:00';
    contador.style.color = 'red';
    contador.style.fontWeight = 'bold';
    contador.style.position = 'absolute';
    contador.style.top = '20%';
    contador.style.left = '49%';
    contador.style.display = 'none';

    document.body.appendChild(contador);
}

/* Toggle tela Config */

const toggles = document.querySelectorAll('.caixa-alternar');

if (toggles.length > 0) {
    toggles.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('ativo');
        });
    });
}

/* Contador da gravação */

if (botaoGravar) {

    const contador = document.createElement('p');
    contador.innerText = '00:00';
    contador.style.color = 'red';
    contador.style.fontWeight = 'bold';
    contador.style.position = 'absolute';
    contador.style.top = '20%';
    contador.style.left = '49%';
    contador.style.display = 'none';

    document.body.appendChild(contador);
}

// Função Matemática: JOVIStudAI

const inputConta = document.querySelector('.input-conta');
const resultadoConta = document.querySelector('.resultado-conta');
const botaoResolver = document.querySelector('.botao-resolver');

if (botaoResolver && inputConta && resultadoConta) {

    botaoResolver.addEventListener('click', () => {

        try {
            alert("Na nossa feature, a ideia era a própria câmera entender o calculo e calcular, aqui está sendo manual mesmo")

            const conta = inputConta.value;
            const resultado = eval(conta);

            resultadoConta.innerText = `Resultado: ${resultado}`;

        } catch {
            resultadoConta.innerText = 'Conta inválida';
        }
    });
}
