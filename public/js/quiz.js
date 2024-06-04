const comecarQuiz = document.querySelector(".comecar")
const questoes = document.querySelector(".container-questoes")
const respostas = document.querySelector(".container-respostas")
const textoPergunta = document.querySelector(".pergunta")
const proxima = document.querySelector(".proxima")

comecarQuiz.addEventListener("click", comecarJogo)
proxima.addEventListener("click", proximaQuestao)

var questaoAtual = 0;
var totalAcertos = 0;

function comecarJogo() {
    comecarQuiz.classList.add("hide")
    questoes.classList.remove("hide")
    proximaQuestao()
}

function proximaQuestao() {
    recarregar()

    if (quiz.length == questaoAtual) {
       return finalizar()
    }

    while(respostas.firstChild) {
        respostas.removeChild(respostas.firstChild)
    }

    textoPergunta.textContent = quiz[questaoAtual].pergunta
    quiz[questaoAtual].respostas.forEach(resposta => {
        const novaResposta = document.createElement("button")
        novaResposta.classList.add("button","resposta")
        novaResposta.textContent = resposta.texto
        if (resposta.correct) {
            novaResposta.dataset.correct = resposta.correct
        }
        respostas.appendChild(novaResposta)
        
        novaResposta.addEventListener("click", select)
    })
}

function recarregar() {
while(respostas.firstChild) {
respostas.removeChild(respostas.firstChild)
}

document.body.removeAttribute("class")
proxima.classList.add("hide")
}

function select(event) {
const respostaEscolhida = event.target

if (respostaEscolhida.dataset.correct) {
  totalAcertos++
}

document.querySelectorAll(".resposta").forEach(button => {
  button.disabled = true

  if (button.dataset.correct) {
    button.classList.add("certo")
  } else {
    button.classList.add("errado")
  }
})

proxima.classList.remove("hide")
questaoAtual++
}

function finalizar() {
    const totalQuestoes = quiz.length;
    const resultado = totalAcertos * 100 / totalQuestoes;
    const erros = totalQuestoes - totalAcertos;
    let mensagem = ""

    if (true) {
        if (resultado >= 90) {
            mensagem = "Parabéns, você é Corinthiano roxo."
        } else if (resultado >= 70) {
            mensagem = "Muito bom, você realmente torce para o Corinthians."
        } else if (resultado >= 50) {
            mensagem = "Foi bem, mas tenho minhas dúvidas..."
        } else {
            mensagem = "Sai daqui Palmeirense 🤬."
        }
    }

    questoes.innerHTML = `<p>Total de perguntas: ${totalQuestoes}<br>
    Acertos: <span style="color:green; font-weight:bold">${totalAcertos}</span><br>
    Erros: <span style="color:red; font-weight:bold">${erros}</span><br>
    Aproveitamento: <span style="color:#DAA520; font-weight:bold">${resultado}%</span><br>
    ${mensagem}</p>
    <a href="../dashboard/painel.html"><button class="button">Finalizar</button></a>`

} 

const quiz = [
    {
        pergunta: "Em qual ano o Corinthians foi fundado ?",
        respostas: [{texto:"1900", correct: false},{texto:"1890", correct: false},{texto:"1910", correct: true},{texto:"1911", correct: false}],
    },
    
    {
        pergunta: "Em quais anos o Corinthians foi campeão mundial ?",
        respostas: [{texto:"2000 e 2012", correct: true},{texto:"2001 e 2012", correct: false},{texto:"1994 e 2002", correct: false},{texto:"1951 e 2020", correct: false}],
    },
    
    {
        pergunta: `Qual desses é considerado por muitos torcedores o maior jogador da história do Corinthians?`,
        respostas: [{texto:"Marlone", correct: false},{texto:"Cássio", correct: true},{texto:"Matías Rojas", correct: false},{texto:"André Balada", correct: false}],
    },

    {
        pergunta: "Qual o nome do estádio do Corinthians ?",
        respostas: [{texto:"Santiago Bernabeu", correct: false},{texto:"Pacaembu", correct: false},{texto:"Arena Corinthians", correct: false},{texto:"Neo Química Arena", correct: true}],
    },

    {
        pergunta: "Quantas vezes o Corinthians foi campeão brasileiro ?",
        respostas: [{texto:"7", correct: true},{texto:"10", correct: false},{texto:"4", correct: false},{texto:"30", correct: false}],
    },

    {
        pergunta: `Em qual ano o Corinthians NÃO foi campeão da Copa do Brasil ?`,
        respostas: [{texto:"2022", correct: true},{texto:"2009", correct: false},{texto:"2002", correct: false},{texto:"1995", correct: false}],
    },

    {
        pergunta: "Qual ídolo do Corinthians era conhecido como Calcanhar de Ouro ?",
        respostas: [{texto:"Kai Havertz", correct: false},{texto:"Gignac", correct: false},{texto:"Matías Rojas", correct: false},{texto:"Sócrates", correct: true}],
    },

    {
        pergunta: "Qual o nome completo do Corinthians ?",
        respostas: [{texto:"Clube de Regatas Corinthians", correct: false},{texto:"Sport Club Corinthians Paulista", correct: true},{texto:"Corinthians Futebol Clube", correct: false},{texto:"Sport Club Corintian Paulista", correct: false}],
    },

    {
        pergunta: "Quantas vezes o Corinthians foi campeão da Copa São Paulo de Futebol Júnior ?",
        respostas: [{texto:"30", correct: false},{texto:"18", correct: false},{texto:"11", correct: true},{texto:"10", correct: false}],
    },

    {
        pergunta: "Quantas vezes o Corinthians foi campeão da Libertadores Feminina ?",
        respostas: [{texto:"4", correct: true},{texto:"5"},{texto:"0"},{texto:"1"}],
    }
]