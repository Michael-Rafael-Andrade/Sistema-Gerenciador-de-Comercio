class Produto{
    constructor(id, descricao, quantidade, valor){
        this._id = id;
        this._descricao = descricao;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // Métodos GET
    get id(){
        return this._id;
    }
    get descricao(){
        return this._descricao;
    }
    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }

    // Métodos SET
    set descricao(novaDescricao){
        this._descricao = novaDescricao;
    }
    set quantidade(novaQuantidade){
        this._quantidade = novaQuantidade;
    }
    set valor(novoValor){
        this._valor = novoValor;
    }
}

module.exports = Produto;