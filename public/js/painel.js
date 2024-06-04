const ctx = document.getElementById('grafico_quiz');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctx2 = document.getElementById('grafico_idolos');

new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

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
                if(data.length > 0){
                  let primeiroObjeto = data[0];
                  let primeiraChave = Object.keys(primeiroObjeto)[0];
                  valorTentativas = primeiroObjeto[primeiraChave];
                }
  
  
                tentativas.innerHTML = `TENTATIVAS: <br>${valorTentativas}`;
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
                if(data.length > 0){
                  let primeiroObjeto = data[0];
                  let primeiraChave = Object.keys(primeiroObjeto)[0];
                   resultado = primeiroObjeto[primeiraChave];
                }
  
  
                maior_pontuacao.innerHTML = `MAIOR PONTUAÇÃO: <br> ${resultado}`;
            })
  });
