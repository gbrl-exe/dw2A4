import CEP from './modules/cep.js'
import Covid from './modules/covid.js'
import Mascara from './modules/mascara.js'
import Endereco from './modules/validacao.js'


var viacep = new CEP()
var covid = new Covid()

document.getElementById('CEP').addEventListener('blur', (e) => {
    let cep = document.getElementById('CEP').value
    viacep.getData(cep).then(responseCep => responseCep.json()) 
    .then(endereco => {
        covid.getData(endereco.uf)
        .then(responseCovid => responseCovid.json())
        .then(covidData => {
            var erro = covidData.state
            if(verificaErro(erro) != true) {
                console.log(covidData)
                document.getElementById("UF").innerHTML=covidData.state
                document.getElementById("Casos").innerHTML=covidData.cases
                document.getElementById("Suspeitas").innerHTML=covidData.suspects
                document.getElementById("Mortes").innerHTML=covidData.deaths
            }
        })
    })
})

document.querySelectorAll('input').forEach((input) => {
    const field = input.dataset.js
    var value = new Mascara('');

    if(field != undefined){
        input.addEventListener('input', (e) => {
            value.setValue(e.target.value)
            e.target.value = value[field]()
        }, false)
    }
})

function verificaErro(erro) {
    if(erro === undefined){
        document.getElementById('UF').innerHTML = ""
        document.getElementById('Casos').innerHTML = ""
        document.getElementById('Suspeitas').innerHTML = ""
        document.getElementById('Mortes').innerHTML = ""
        alert("Verifique se o CEP está correto.")
        return true
    }
}

