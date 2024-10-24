function pegarCSS(variavel){
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const configuraEixo ={
    color: pegarCSS('--vermelho'),
    size:16,
    family: pegarCSS('--vermelho')
}

export{pegarCSS, configuraEixo}