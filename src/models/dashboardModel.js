
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

  function buscarUltimasMedidas() {

    var instrucaoSql = `select quiz.pontuacao, usuario.nome from usuario join quiz on usuario.idUsuario = quiz.fkUsuario limit 5;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarVotos() {

    var instrucaoSql = `select sum(case when fkIdolo = 1 then 1 else 0 end) as cassio,
	sum(case when fkIdolo = 2 then 1 else 0 end) as socrates,
	sum(case when fkIdolo = 3 then 1 else 0 end) as marcelinho,
	sum(case when fkIdolo = 4 then 1 else 0 end) as neto
	from usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    kpi_tentativas,
    kpi_resultado,
    buscarUltimasMedidas,
    buscarVotos
  };