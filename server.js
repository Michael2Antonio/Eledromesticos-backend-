const express = require('express');
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'yizzvorepkddap',
    password: '7121c6ccab0ab2111b565d6349041d95f90d505e294bd3355215f1a6c57c5e1d',
    host: 'ec2-54-210-128-153.compute-1.amazonaws.com',
    database: 'dd25c706vr986i',
    port: 5432,
    ssl: {rejectUnauthorized: false}
});

const server = express();


server.use(express.json());

server.get('/eletrodomesticos', async function(request, response) {
    const result = await pool.query('SELECT * FROM eletrodomesticos ORDER BY id');
    return response.json(result.rows);
});

server.post('/eletrodomesticos', async function(request, response) {

    // PEGA OS VALORES QUE ESTÃO NO request.body
    const {nome,quantidade,categoria} = request.body;
    const sql = `INSERT INTO eletrodomesticos (nome,quantidade,categoria) VALUES ($1, $2, $3)`;
    await pool.query(sql, [nome,quantidade,categoria]);
    return response.status(204).send();
});

server.delete('/eletrodomesticos/:id', async (request, response) => {
    const {id} = request.params;
    const sql = `DELETE FROM eletrodomesticos WHERE id = $1`;
    await pool.query(sql, [id]);
    return response.status(204).send();
});

server.put('/eletrodomesticos/:id', async (request, response) => {
    const {id} = request.params;
    const {nome,quantidade,categoria} = request.body;
    const sql = `UPDATE eletrodomesticos SET nome = $1, quantidade = $2, categoria = $3 WHERE id = $4`;
    await pool.query(sql, [nome,quantidade,categoria,id]);
    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);