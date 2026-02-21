const conexao = require('../infraestrutura/conexao');
class PecasModel {
    executaQuery(sql,paramentros=""){
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
        const sql = "SELECT * FROM pecas";
        return this.executaQuery(sql);
    }

    buscarPorId(id){
        const sql= "SELECT * FROM pecas WHERE id = ?";
        return this.executaQuery(sql,id);
}

    criar(novaPeca){
    const sql="INSERT INTO pecas SET ?";
    return this.executaQuery(sql,novaPeca);
    }   
   
    atualizar (pecaAtualizada,id){
        const sql=" UPDATE pecas SET ? WHERE id=?";
        console.log(pecaAtualizada);
        return this.executaQuery(sql,[pecaAtualizada,id]);

    }

    deletar (id){
        const sql="DELETE FROM pecas Where id=?";
        return this.executaQuery(sql,id);
    }

}

module.exports = new PecasModel(); 