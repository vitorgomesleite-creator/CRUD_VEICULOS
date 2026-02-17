const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '963741852',
    database: 'VEICULOS'
});


connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err);
        return;
    }
    console.log('✅ Conectado ao banco!');
});

module.exports = connection;
