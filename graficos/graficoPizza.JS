import { pegarCSS } from "./comum.js";

async function criarGraficoPizza() {
    const url = 'https://raw.githubusercontent.com/nando244/comida.json/refs/heads/main/outro.json'; // URL do JSON
    const res = await fetch(url);
    const dados = await res.json();
    
    // Extrai os esportes e suas porcentagens
    const esporte = Object.keys(dados);
    const porcentagem = Object.values(dados);

    const data = [
        {
            keys: esporte,
            values: porcentagem,
            type: 'pie',
            marker: {
                colors: [
                    pegarCSS(''), 
                    pegarCSS(''), 
                    pegarCSS('')
                ] // Cores dos setores
            }
        }
    ];

    const layout = {
        plot_bgcolor: pegarCSS('--verde-médio'),
        paper_bgcolor: pegarCSS('--verde-médio'),
        title: {
            text: 'Os Esportes Mais Praticados',
            font: {
                color: pegarCSS('--branco'),
                family: pegarCSS('--fonte-titulo'),
                size: 50
            }
        }
    };

    // Cria e anexa o gráfico ao DOM
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('caixa-grafico').appendChild(grafico);
    
    // Plota o gráfico
    Plotly.newPlot(grafico, data, layout);
}

// Chama a função para criar o gráfico
criarGraficoPizza();