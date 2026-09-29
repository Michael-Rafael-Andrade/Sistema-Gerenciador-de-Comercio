class Cliente{
    constructor(id, nome){
        this._id = id;
        this._nome = nome;
    }

    // Métodos GET
    get id(){
        return this._id;
    }
    get nome(){
        return this._nome;
    }

    // Métodos SET
    set id(novoId){
        this._id = novoId;
    }
    set nome(novoNome){
        this._nome = novoNome;
    }

}

module.exports = Cliente;


