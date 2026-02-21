const veiculosModel = require("../models/veiculosModel");

class VeiculosController{
    buscar(req,res){
        const listaVeiculos = veiculosModel.listar();
        return listaVeiculos
            .then((veiculos)=>res.status(200).json(veiculos))
            .catch((error) => res.status(400).json(error.message));
    }

    buscarPorId(req,res){
        const { id } = req.params;
        const veiculos = veiculosModel.buscarPorId(id);
        return veiculos
            .then(resultbuscarPorId=> res.status(200).json(resultbuscarPorId))
            .catch(error=> res.status(400).json(error.message));  
    }

    criar(req,res){
        const novoVeiculo = req.body;
        const veiculos = veiculosModel.criar(novoVeiculo);
        return veiculos
            .then(veiculoCriado=> res.status(201).json(veiculoCriado))
            .catch(error=> res.status(400).json(error.message));
    }    

    atualizar(req,res){
        const { id } = req.params;
        const veiculoAtualizado = req.body;
        const veiculos = veiculosModel.atualizar(veiculoAtualizado,id);
        return veiculos
            .then(resultVeiculoAtualizado=> res.status(200).json(resultVeiculoAtualizado))
            .catch(error=> res.status(400).json(error.message));  
    }

    deletar(req,res){
        const { id } = req.params;
        const veiculos = veiculosModel.deletar(id);
        return veiculos
            .then(resultVeiculoDeletado=> res.status(200).json(resultVeiculoDeletado))
            .catch(error=> res.status(400).json(error.message));  
    }
}

module.exports = new VeiculosController();

