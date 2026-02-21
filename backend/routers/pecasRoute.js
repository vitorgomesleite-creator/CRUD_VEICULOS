const { Router } = require("express");
const router = Router();
const pecasController = require("../controllers/pecasController");

router.get("/pecas", pecasController.buscar);
router.post("/pecas", pecasController.criar);
router.put("/pecas/:id", pecasController.atualizar);
router.delete("/pecas/:id", pecasController.deletar);
router.get("/pecas/:id", pecasController.buscarPorId);

module.exports = router;
