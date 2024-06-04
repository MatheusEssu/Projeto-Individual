
var database = require("../database/config")

function kpi_tentativas(id) {

    var instrucaoSql = `SELECT sum(tentativas) from Quiz where fkUsuario = '${id}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpi_resultado(id) {

    var instrucaoSql = `SELECT max(pontuacao) from Quiz where fkUsuario = '${id}';`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    kpi_tentativas,
    kpi_resultado
  };