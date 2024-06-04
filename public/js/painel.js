nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;
email_usuario.innerHTML = sessionStorage.EMAIL_USUARIO;

let id = sessionStorage.ID_USUARIO;

fetch(`/dashboard/kpi_tentativas`, {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json',
    },
    body: JSON.stringify({
        idServer: id
    }),
})
    .then(function (resposta) {
        console.log(resposta)
        resposta.json().then(function (data) {
            console.log(data)

            let valorTentativas = `Sem Dados`
            if (data.length > 0) {
                let primeiroObjeto = data[0];
                let primeiraChave = Object.keys(primeiroObjeto)[0];
                valorTentativas = primeiroObjeto[primeiraChave];
            }

            if (valorTentativas > 0) {
                tentativas.innerHTML = `TENTATIVAS: <br>${valorTentativas}`;
            } else {
                tentativas.innerHTML = `TENTATIVAS: <br>0`
            }
        })
    });

fetch(`/dashboard/kpi_resultado`, {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json',
    },
    body: JSON.stringify({
        idServer: id
    }),
})
    .then(function (resposta) {
        console.log(resposta)
        resposta.json().then(function (data) {
            console.log(data)

            let resultado = `Sem Dados`
            if (data.length > 0) {
                let primeiroObjeto = data[0];
                let primeiraChave = Object.keys(primeiroObjeto)[0];
                resultado = primeiroObjeto[primeiraChave];
            }

        if (resultado > 0) {
            maior_pontuacao.innerHTML = `MAIOR PONTUAÇÃO: <br>${resultado}%`;
        } else {
            maior_pontuacao.innerHTML = `MAIOR PONTUAÇÃO: <br>AINDA NÃO JOGOU O QUIZ`
        }
        })
    });

var dados = []
var nomes = [];
fetch("/dashboard/buscarUltimasMedidas")
    .then(function (resposta) {
        resposta.json().then(function (res) {
            console.log(res[0]);
            dados[0] = res[0].pontuacao;
            dados[1] = res[1].pontuacao;
            dados[2] = res[2].pontuacao;
            dados[3] = res[3].pontuacao;
            dados[4] = res[4].pontuacao;

            nomes[0] = res[0].nome;
            nomes[1] = res[1].nome;
            nomes[2] = res[2].nome;
            nomes[3] = res[3].nome;
            nomes[4] = res[4].nome;
            graficos();
        })
    })

var idolos = [];
    fetch("/dashboard/buscarVotos")
    .then(function (resposta) {
        resposta.json().then(function (res) {
            console.log(res[0]);
            idolos[0] = res[0].cassio;
            idolos[1] = res[0].socrates;
            idolos[2] = res[0].marcelinho;
            idolos[3] = res[0].neto;
            graficosIdolos();
        })
    })

function graficos() {

    const ctx = document.getElementById('grafico_quiz');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [nomes[0], nomes[1], nomes[2], nomes[3], nomes[4]],
            datasets: [{
                label: 'Pontuação',
                data: [dados[0], dados[1], dados[2], dados[3], dados[4]],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }
        }
    });
}


function graficosIdolos() {

    const ctx2 = document.getElementById('grafico_idolos');
    
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Cássio', 'Sócrates', 'Marcelinho', 'Neto'],
            datasets: [{
                label: 'ídolos votados',
            data: idolos,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                suggestedMin: 0,
            }
        }
    }
});

}