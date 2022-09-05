import Mask from './modulos/mascara.js'
import Pessoa from './modulos/validacao.js'

document.querySelectorAll('input').forEach((input) => {
    const field = input.dataset.js
    var value = new Mask('');

    if(field != undefined){
        input.addEventListener('input', (e) => {
            value.setValue(e.target.value)
            e.target.value = value[field]()
        }, false)
    }
})

document.getElementById('button').addEventListener('click', (e) => {
    var values = document.querySelectorAll('input')
    const pessoa = new Pessoa(values[0].value, values[1].value, values[2].value, values[3].value, values[4].value, values[5].value)
    
    if(pessoa.nome == undefined){
        for(var i = 0; i < pessoa.length;i++){
            document.getElementById(pessoa[i]).classList.add('errorInput')
            
            document.getElementById(pessoa[i]).addEventListener('blur', (e) => {
                e.target.classList.remove('errorInput')
            }, false)
        }
    }else{
        document.getElementsByClassName('header')[0].innerHTML = "<p>Os dados foram gravados com sucesso.</p>"
    }
})