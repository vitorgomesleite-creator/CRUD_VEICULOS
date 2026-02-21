const pecasModel = require("../models/pecasModel");

class PecasController {
  buscar(req, res) {
    const listaPecas = pecasModel.listar();
    return listaPecas
      .then((pecas) => res.status(200).json(pecas))
      .catch((error) => res.status(400).json(error.message));
  }

  buscarPorId(req, res) {
    const { id } = req.params;
    const pecas = pecasModel.buscarPorId(id);
    return pecas
      .then((resultbuscarPorId) => res.status(200).json(resultbuscarPorId))
      .catch((error) => res.status(400).json(error.message));
  }

  criar(req, res) {
    const novaPeca = req.body;
    const pecas = pecasModel.criar(novaPeca);
    return pecas
      .then((pecaCriada) => res.status(200).json(pecaCriada))
      .catch((error) => res.status(400).json(error.message));
  }

  atualizar(req, res) {
    const pecaAtualizada = req.body;
    const { id } = req.params;
    const pecas = pecasModel.atualizar( pecaAtualizada,id);
    return pecas
      .then((resultPecaAtualizada) =>
        res.status(200).json(resultPecaAtualizada),
      )
      .catch((error) => res.status(400).json(error.message));
  }

  deletar(req, res) {
    const { id } = req.params;
    const pecas = pecasModel.deletar(id);
    return pecas
      .then((resultPecaDeletada) => res.status(200).json(resultPecaDeletada))
      .catch((error) => res.status(400).json(error.message));
  }
}

module.exports = new PecasController();
