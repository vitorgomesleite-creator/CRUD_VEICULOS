class Tabelas {
    init(conexao){

        this.conexao=conexao;
        this.criarTabelaVeiculos();
    }

    criarTabelaVeiculos(){
        const sql= `CREATE TABLE IF NOT EXISTS AUTOMOVEIS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(100) NOT NULL,
    ano DATE NOT NULL,
    placa VARCHAR(20) NOT NULL,
    descricao TEXT NOT NULL,
    preco DOUBLE NOT NULL
)`;

    this.conexao.query(sql,(error)=>{
        if(error){
            console.log ("Erro na hora de criar a tabela");
            console.log(error.message);
            return;
        }
        console.log("Tabela criada com sucesso");
    });

    }

}

module.exports = new Tabelas();


