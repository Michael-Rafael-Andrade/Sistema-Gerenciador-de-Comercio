class Produto{
    constructor(id, descricao, quantidade, valor){
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    // Métodos GET
    get id(){
        return this.id;
    }
    get descricao(){
        return this.descricao;
    }

    // Métodos SET

}