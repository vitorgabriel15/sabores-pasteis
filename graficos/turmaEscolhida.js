import { pegarCSS } from "./comum.js";

async function pastelTancredo() {
    const url = 'https://script.google.com/macros/s/AKfycbxNFyp99DIImNmfqeuF2kscSfa__2WfMpvrcSr5njNV0j8X7iJ8MwhIwVU9ZZzHejIafg/exec';
    const res = await fetch(url);
    const dados = await res.json();
    const pastelVotados = dados.slice(1).map( pastel => pastel [2]);
    const contagemPastel = pastelVotados.reduce((acc, pastelVotados) =>
    {
        acc[pastelVotados] = (acc[pastelVotados] || 0) + 1;
        return acc;
    },
    {});

    const valores = Object.values(contagemPastel)
    const etiqueta = Object.keys(contagemPastel)


    const data = [
        { 
            values: valores,
            labels: etiqueta,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]
    const layout =
    {
        plot_bgcolor: pegarCSS('--cinza'),
        paper_bgcolor: pegarCSS('--laranja')
    }

    const pesquisaTitulo = document.createElement('h3')
    pesquisaTitulo.classList.add('caixa-grafico_titulo')
    pesquisaTitulo.innerHTML = `As turmar que votaram no <span>Tancredo</span>`

    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive:true,
        displayModeBar: false,
    }
    Plotly.newPlot(grafico,data, layout, config)
    
}

pastelTancredo()