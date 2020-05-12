const express = require('express');

const server = express();

server.use(express.json());

const produtos =[
    { nome: 'Microondas', quantidade: 2, categoria: 'Cozinha'},
    { nome: 'Televisao', quantidade: 1, categoria: 'Sala'}
]

server.get('/produto', function(request, response) {
    response.json(produtos);
})

server.post('/produto', function(request, response ){

    //const nome = request.body.nome;
    //const quantidade = request.body.quantidade;

    const {nome, quantidade, categoria} = request.body;

    produtos.push({nome, quantidade, categoria});
    response.status(204).send();
})

server.put('/produto/:id', function(request,response){
    const id = request.params.id;
    const {nome, quantidade, categoria} = request.body;

    for(let i = 0; i < produtos.length; i++){
        if (produtos[i].nome == id){
            produtos[i].nome = nome;
            produtos[i].quantidade = quantidade;
            produtos[i].categoria = categoria;
            break;
        }
    }

    return response.status(204).send();
})

server.delete('/produto/:id', function(request, response){
    const id = request.params.id;

    for(let i = 0; i < produtos.length; i++){
        if (produtos[i].nome == id){
           produtos.splice(i, 1);
            break;
        }
    }

    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);