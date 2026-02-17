
const conexao = require("../infraestrutura/conexao")
   class VeiculosModel {
    executaQuery(sql,paramentros="") {
        return new Promise((resolve,reject)=>{
           conexao.query(sql,paramentros,(error,resposta)=>{
               if(error){
                   return reject(error);
               }
               return resolve(resposta);
           });
        });
    } 

    listar(){
        const sql = "SELECT * FROM VEICULOS"
        return this.executaQuery(sql);
    }

    criar(novoVeiculo){
        const sql ="INSERT INTO veiculos SET ?";
        return this.executaQuery(sql,novoVeiculo);
    }

    atualizar (veiculoAtualizado,id){
        const sql ="UPDATE veiculos SET ? WHERE id = ?";
        return this.executaQuery(sql,[veiculoAtualizado,id]);
    }

    deletar (veiculoDeletado,id){
        const sql ="DELETE FROM veiculos WHERE id = ?";
        return this.executaQuery(sql,id);
    }
}

module.exports = new VeiculosModel();