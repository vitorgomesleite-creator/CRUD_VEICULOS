const { Router } = require("express");
const router = Router();
const veiculosController= require("../controllers/veiculosController");
  
router.get("/veiculos",veiculosController.buscar);

router.post("/veiculos",veiculosController.criar); 

router.put("/veiculos/:id",veiculosController.atualizar); 

router.delete("/veiculos/:id",veiculosController.deletar);
 
module.exports = router;