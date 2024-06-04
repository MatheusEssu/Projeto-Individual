var dashboardModel = require("../models/dashboardModel");

function kpi_tentativas(req, res) {
    var id = req.body.idServer;
     if (id === undefined) {
      console.log("Seu ID está undefined!");
      return res.status(400).send("Seu ID está undefined!");
    }
  
    dashboardModel.kpi_tentativas(id)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao realizar o select (id) kpi_tentativas! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function kpi_resultado(req, res) {
  var id = req.body.idServer;
   if (id === undefined) {
    console.log("Seu ID está undefined!");
    return res.status(400).send("Seu ID está undefined!");
  }

  dashboardModel.kpi_resultado(id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao realizar o select (id) kpi_resultado! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    kpi_tentativas,
    kpi_resultado
  };