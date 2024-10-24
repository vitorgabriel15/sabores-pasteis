import { pegarCSS } from "./comum.js";

async function pastelTancredo() {
    const url = 'https://script.google.com/macros/s/AKfycbxNFyp99DIImNmfqeuF2kscSfa__2WfMpvrcSr5njNV0j8X7iJ8MwhIwVU9ZZzHejIafg/exec';
    const res = await fetch(url);
    const dados = await res.json();
    const pastelVotados = dados.slice(1).map( pastel => pastel [1]);
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
    pesquisaTitulo.innerHTML = `Os pasteis mais votados no Colégio<span>Tancredo</span>`

    const grafico = document.createElement('div')
    grafico.className = 'grafico-disco'
    document.getElementById('caixa-grafico').appendChild(pesquisaTitulo)
    document.getElementById('caixa-grafico').appendChild(grafico)
    const config = {
        responsive:true,
        displayModeBar: false,
    }
    Plotly.newPlot(grafico,data, layout, config)

    const caixa = document.getElementById('caixa-grafico')
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')
    paragrafo.innerHTML = 'O pastel de carne foi eleito o mais votado no mundo, refletindo sua popularidade global e o apelo universal do seu sabor. Essa iguaria, com sua massa crocante e recheio suculento, conquistou corações e paladares em diversas culturas, mostrando-se uma opção clássica e irresistível. No entanto, na escola, a situação foi um pouco diferente. O pastel de queijo e frango se destacou como o favorito entre os alunos. Essa combinação cremoso e saborosa conquistou os estudantes, que apreciam o sabor marcante do frango misturado ao queijo derretido, criando uma experiência única e deliciosa.'
    caixa.appendChild(paragrafo)
    
}

pastelTancredo()