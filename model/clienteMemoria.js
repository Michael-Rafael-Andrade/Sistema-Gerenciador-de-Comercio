var Cliente = require('./modelCliente.js');

const lista_cliente = {}; // será um objeto ao invés de usar o vetor de objeto

class ClienteMemoria {
    // métodos assincronos para simular os métodos de um ORM
    
    // atualiza
    async atualiza(nome){
        lista_cliente[id] = new Cliente(nome);
        return lista_cliente[id];
    }

    // cria
    async cria(id, nome){
        lista_cliente[id] = new Cliente(id, nome)
            return lista_cliente[id];
    }

    // consulta
    async consulta(id){
        if(lista_cliente[id])
            return lista_cliente[id]
        else throw new Error(`Cliente com o ID: ${id} não esta cadastrado.`);
    }

    // deleta
    async deleta(id){
        if(lista_cliente[id]){
            delete lista_cliente[id];
        } else throw new Error(`Cliente com o ID: ${id} não existe.`);
    }

    // listar
    async lista(){
        return Object.values(lista_cliente);
    }
}

var clientes = new ClienteMemoria();

module.exports = clientes;