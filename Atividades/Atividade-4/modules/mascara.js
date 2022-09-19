export default class Mascara {
    
    setValue(value){
        this.value = value
    }

    cep() {
        return this.value
            .replace(/\D+/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    }
}