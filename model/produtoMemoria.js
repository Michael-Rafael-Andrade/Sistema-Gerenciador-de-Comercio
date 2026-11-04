// importar a classe Produto
var Produto = require('./modelProduto');

const lista_produto = {} // Será uma lista de produtos

class ProdutoMemoria {
    // métodos assincronos para simular os métodos de um ORM

    // atualiza
    async atualiza(id, descricao, quantidade, valor) {
        if (lista_produto[id]) {
            lista_produto[id] = new Produto(id, descricao, quantidade, valor);
            return lista_produto[id];
        }
        throw new Error(`Produto com o ID: ${id} não está cadastrado.`);
    }

    // cria
    async cria(id, descricao, quantidade, valor) {
        lista_produto[id] = new Produto(id, descricao, quantidade, valor)
        return lista_produto[id];
    }

    // consulta
    async consulta(id) {
        if (lista_produto[id]) {
            return lista_produto[id]
        } else {
            throw new Error(`Produto com o ID: ${id} não esta cadastrado.`);
        }
    }

    // deleta
    async deleta(id) {
        if (lista_produto[id]) {
            delete lista_produto[id];
        } else {
            throw new Error(`Produto com o ID: ${id} não existe.`);
        }
    }

    // listar
    async lista() {
        return Object.values(lista_produto);
    }

    // busca por id
    async buscaPorId(id){
        return lista_produto[id];
    }

    // buscar por palavra
    async buscarPorNome(termo){
        const todosOsProdutos = Object.values(lista_produto);
        // filtra o array verificando se o nome contém o termo buscado ignorando maíusculas e minúsculas
        return todosOsProdutos.filter(produto => produto.nome.toLowerCase().includes(termo.toLowerCase()));
    }


}

module.exports = new ProdutoMemoria();