var database = require("../database/config")

function insertQuiz(ponto, id, tentativas) {
    console.log("entrou no insert")
    var instrucao = `
    insert into quiz (tentativas, pontuacao, fkUsuario) values 
    (${tentativas}, ${ponto}, ${id});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    insertQuiz
};