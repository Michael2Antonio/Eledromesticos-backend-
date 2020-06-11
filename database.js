const Pool = require('pg').Pool;

// CONEXÃO COM BD
const pool = new Pool({
    user: 'yizzvorepkddap',
    password: '7121c6ccab0ab2111b565d6349041d95f90d505e294bd3355215f1a6c57c5e1d',
    host: 'ec2-54-210-128-153.compute-1.amazonaws.com',
    database: 'dd25c706vr986i',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});

/*const sql = `


    CREATE TABLE IF NOT EXISTS eletrodomesticos
    (
        ID serial primary key,
        nome varchar(200) not null,
        quantidade varchar(200) not null,
        categoria varchar(200) not null
    )
`;

// ABRE CONEXÃO, CRIA TABELA NO POSTGRE E JÁ FECHA A CONEXÃO
pool.query(sql, function (error, resultado) {
  if (error)
        throw error;
    console.log('Tabela criada com sucesso!');
});
*/


///INSERT
/*const sql_insert = `
    INSERT INTO eletrodomesticos (nome, quantidade, categoria)
        VALUES
            ('Vinho', '2','Vinhos'),
            ('Leite Condensado', '1','Derivados do Leite')
            `;


pool.query(sql_insert, function(erro, resultado) {
    if (erro)
        throw erro;
    console.log('Inserido com sucesso')});


*/

const sql_select =  `SELECT * FROM eletrodomesticos`;

    pool.query(sql_select, function(erro, resultado) {
    if (erro)
        throw erro;
    console.log(resultado.rows)});