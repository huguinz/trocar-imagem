"use scrict"

let imagensCarros = ""
let trocar = 0

const botaoTrocar = document.getElementById("trocar-carro")

function trocarImagens(){
    if(trocar == 5){
        trocar = 0 
    }
    trocar++
    imagensCarros = `url(./img/carro${trocar}.jpg)`
    document.documentElement.style.setProperty('--fundo', imagensCarros)
    console.log(imagensCarros)
}

botaoTrocar.addEventListener('click', trocarImagens)