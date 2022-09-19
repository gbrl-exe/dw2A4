export default class Endereco {
    //Construtor da classe
    constructor(cep){
        var erros = []
        this.cep = cep

        if(this.cep.replace(/[^\d]+/g,'').length != 8){
            erros.push('cep')
        }
        if(erros.length > 0)
            return(erros)
    }
    
}