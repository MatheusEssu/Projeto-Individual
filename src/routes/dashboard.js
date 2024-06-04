var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/kpi_tentativas", function (req, res) {
    dashboardController.kpi_tentativas(req, res);
})

router.post("/kpi_resultado", function (req, res) {
    dashboardController.kpi_resultado(req, res);
})

router.get("/buscarUltimasMedidas", function (req, res) {
    dashboardController.buscarUltimasMedidas(req, res);
})

router.get("/buscarVotos", function (req, res) {
    dashboardController.buscarVotos(req, res);
})

module.exports = router;