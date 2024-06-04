var quizModel = require("../models/quizModel");

function insertQuiz(req, res) {
    var ponto = req.body.pontuacaoServer;
    var id = req.body.idServer
    var tentativas = req.body.tentativaServer
    quizModel.insertQuiz(ponto, id, tentativas)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o ponto! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
}

module.exports = {
    insertQuiz
};