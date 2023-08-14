const turnOn = document.getElementById ('turnOn')
const turnOff = document.getElementById ('turnOff')
const lamp = document.getElementById ('lamp')


function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1
} //identifica se a lâmpada está quebrada ou não para que as próximas funções possam funcionar.

function lampOn (){
    if (!isLampBroken ())
    lamp.src = './acesa.png'
}

function lampOff () {
    if (!isLampBroken ())
    lamp.src = './apagada.png'
}

function lampBroken () {
    lamp.src = './quebrada.png'
}
    


turnOn.addEventListener ('click', lampOn)  //observa o botão "ligar". Quando ele for acionado, chama a função "lampOn", entao a imagem apagada que está é substituida pela acesa
turnOff.addEventListener ('click', lampOff) /* observa o botão "desligar". Quando ele for acionado, chama a função "lampOff", entao a imagem acesa é substituida pela apagada */
lamp.addEventListener ('dblclick', lampBroken) /* observa o duplo clicle (dblclick) na lápada. Quando ele for acionado, chama a função "lampBroken", entao a imagem da lâmpada inteira é substituida pela quebrada */