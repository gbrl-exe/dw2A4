export default class Pessoa {
    //Construtor da classe
    constructor(nome, cpf, nascimento, email, telefone, cep){
        var erros = []
        this.nome = nome
        this.cpf = cpf
        this.nascimento = nascimento
        this.email = email
        this.telefone = telefone
        this.cep = cep

        // Validação do nome
        if(this.nome.length <= 0 || this.nome.length > 100){
            erros.push('nome')
        }
        
        // Validação do cpf
        if(!this.validacaoCPF(this.cpf)){
            erros.push('cpf')
        }

        // Validação da data de nascimento
        if(!this.validacaoNascimento(this.nascimento)){
            erros.push('dt_nasc')
        }

        //Validação do e-mail
        if(!/\S+@\S+\.\S+/.test(this.email) ){
            erros.push('email')
        }

        //Validação do telefone
        if(this.telefone.replace(/[^\d]+/g,'').length > 11 || this.telefone.replace(/[^\d]+/g,'').length < 10){
            erros.push('fone')
        }
        if(this.cep.replace(/[^\d]+/g,'').length != 8){
            erros.push('cep')
        }
        if(erros.length > 0)
            return(erros)
    }
    validacaoCPF(cpf) {
        var add
        var i
        var rev
        cpf = cpf.replace(/[^\d]+/g,'');	
        if(cpf == '') return false;	
        if (cpf.length != 11 || 
            cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || 
            cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
            return false;		
        add = 0;	
        for (i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpf.charAt(9)))		
                return false;		
        add = 0;	
        for (i = 0; i < 10; i ++)		
            add += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(cpf.charAt(10)))
            return false;		
        return true;   
    }

    validacaoNascimento(data){
        if(data.length != 10){
            return false
        }

        data = data.replace(/\//g, "-")
        var data_array = data.split("-")
        
        data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]
        
        var hoje = new Date();
        var nasc  = new Date(data);
        var idade = hoje.getFullYear() - nasc.getFullYear();
        var m = hoje.getMonth() - nasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
        
        if(idade < 18){
            return false
        }

        if(idade >= 18 && idade <= 120){
            return true
        }
        return false
    }
}