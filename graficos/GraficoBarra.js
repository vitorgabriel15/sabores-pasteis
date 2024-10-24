import { pegarCSS, configuraEixo } from "./comum.js"

async function criargraficoBarra() {
    const url = "https://raw.githubusercontent.com/nando244/comida.json/refs/heads/main/outro.json"
    const res = await fetch(url)
    const dados = await res.json()
    const pastel = Object.keys(dados)
    const votos = Object.values(dados)

    const data = [
        {
            x: pastel,
            y: votos,
            type: "bar"
        }
    ]

    const layout = {
        plot_bgcolor: pegarCSS('--rosa-claro'),
        paper_bgcolor: pegarCSS('--rosa-claro'),
        title:{
            text: 'Os pastéis mais consumidos no mundo',
            font: {
                color: pegarCSS('--roxo-claro'),
                family: pegarCSS('--fonte-titulo'),
                size: 50
            }
        },
        xaxis: {
            tickfont: configuraEixo,
            tickangle: 20,
        },
        yaxis: {
            tickfont: configuraEixo
        }

    }
    const grafico = document.createElement("div")
    grafico.className = "grafico"
    document.getElementById("caixa-grafico").appendChild(grafico)
    Plotly.newPlot(grafico, data)
 }

 criargraficoBarra()