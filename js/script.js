
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
