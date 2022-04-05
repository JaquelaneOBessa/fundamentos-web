/*Formas de acessar o DOM
*JS é case sensitive: reconhece letras maíusculas e minusculas*
por Tag: getElementByTagNome()
por Id: getElementById()
por Nome: getElementsByNome()
por Classes: getElementsByClassNome()
por Seletor: querySelector()
*/

/* nome = window.document.querySelector('#nome')
 email = window.document.querySelector('#email')
 assunto = window.document.querySelector('#assusnto')*/
var nome = window.document.querySelector('#nome')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = window.document.querySelector('#mapa')

nome.style.width='100%'
email.style.width='100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <3){
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
        nomeOk = false
    }else{
        txtNome.innerHTML = 'Nome válido.'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
     let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido!'
        txtEmail.style.color = 'red'
        emailOk = false
    }else{
        txtEmail.innerHTML = 'E-mail válido.'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (txtAassunto.value.length >= 10){
        txtAssunto.innerHTML = 'Ultrapassou o limite de 200 caracteres.'
        txtAssunto.style.color = 'red'
        assuntoOk = false
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Recebi sua mensagem, te respondo o mais breve possível')
    }else{
        alert ('Ops... tem lgum campo inválido abaixo')
    }
}
function mapaZoom(){
    mapa.style.width ='650px'
    mapa.style.heigth = '500px'
}

function mapaNormal(){
    mapa.style.width ='450px'
    mapa.style.heigth = '250px'

}