// importar a classe Produto
var Produto = require('./modelProduto');

const lista_produto = {} // Será uma lista de produtos

class ProdutoMemoria {
    // métodos assincronos para simular os métodos de um ORM
    
    // atualiza
    async atualiza(descricao){
        lista_produto[id] = new Produto(descricao);
        return lista_produto[id];
    }

    // cria
    async cria(id, descricao, quantidade, valor){
        lista_produto[id] = new Produto(id, descricao, quantidade, valor)
            return lista_produto[id];
    }

    // consulta
    async consulta(id){
        if(lista_produto[id])
            return lista_produto[id]
        else throw new Error(`Produto com o ID: ${id} não esta cadastrado.`);
    }

    // deleta
    async deleta(id){
        if(lista_produto[id]){
            delete lista_produto[id];
        } else throw new Error(`Produto com o ID: ${id} não existe.`);
    }

    // listar
    async lista(){
        return Object.values(lista_produto);
    }
}

var produtos = new ProdutoMemoria();

module.exports = produtos;