export default class CEP {

    getData(cep) {
        return  fetch(`https://viacep.com.br/ws/${cep}/json/`)        
    }
}