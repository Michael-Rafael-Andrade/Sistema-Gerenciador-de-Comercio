var Cliente = require('./modelCliente.js');

const lista_cliente = {}; // será um objeto ao invés de usar o vetor de objeto

class ClienteMemoria {
    // métodos assincronos para simular os métodos de um ORM

    // atualiza
    async atualiza(id, nome) {
        if(lista_cliente[id]){
            lista_cliente[id].nome = nome; // atualiza o nome do cliente existente
            return lista_cliente[id];
        } 
        throw new Error(`Cliente com o ID: ${id} não existe.`);
    }

    // cria
    async cria(id, nome) {
        lista_cliente[id] = new Cliente(id, nome)
        return lista_cliente[id];
    }

    // consulta por id
    async consulta(id) {
        if (lista_cliente[id])
            return lista_cliente[id]
        else {
            throw new Error(`Cliente com o ID: ${id} não esta cadastrado.`);
        }

    }

    // deleta
    async deleta(id) {
        if (lista_cliente[id]) {
            delete lista_cliente[id];
        } else {
            throw new Error(`Cliente com o ID: ${id} não existe.`);
        }
    }

    // listar
    async lista() {
        return Object.values(lista_cliente);
    }

    // Consulta por nome
    async consultaPorIdOuNome(termo){
        // obter todos os produtos, convertendo de objeto para vetor
        const todosOsClientes =  Object.values(lista_cliente);
        // filtra o array verificando se o nome contém o termo buscado (ingnorando maíusculas e minúsculas)
        const todosOsClientesFiltrados = todosOsClientes.filter(item => {
            const achouNoId = String(item.id).toLowerCase().includes(String(termo).toLowerCase());
            const achouNoNome = String(item.nome).toLowerCase().includes(String(termo).toLowerCase());

            // retornar se achou no id ou no nome
            return achouNoId || achouNoNome;
        });
    }


}

var clientes = new ClienteMemoria();

module.exports = clientes;