const url = 'https://raw.githubusercontent.com/nando244/comida.json/refs/heads/main/votos_pasteis'
async function visualizarInfos() {
    const res = await fetch(url)
    const dados = await res.json()
    const PastelMais = dados.votos_pasteis[0].pastel; // Corrigido para 'pastel'
    const NumeroVotos = dados.votos_pasteis[0].votos;
    const comentarios = dados.votos_pasteis[0].comentario;
    console.log(comentarios);

    const paragrafo = document.createElement("p");
    paragrafo.classList.add("caixa-grafico__texto");
    paragrafo.innerHTML = `Essa pesquisa buscou fazer um levantamento dos pastéis mais consumidos nas cantinas das escolas pelo mundo. Com o auxílio da inteligência artificial, foi possível concluir que o pastel <span>${PastelMais}</span> ficou em primeiro lugar, com aproximadamente <span>${NumeroVotos}</span> votos. O principal comentário a respeito do pastel foi: <span>${comentarios}</span>.`;
    
    const caixa = document.getElementById("caixa-grafico");
    caixa.appendChild(paragrafo);
}

visualizarInfos();
