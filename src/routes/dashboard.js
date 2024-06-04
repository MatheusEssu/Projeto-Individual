var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/kpi_tentativas", function (req, res) {
    dashboardController.kpi_tentativas(req, res);
})

router.post("/kpi_resultado", function (req, res) {
    dashboardController.kpi_resultado(req, res);
})

module.exports = router;