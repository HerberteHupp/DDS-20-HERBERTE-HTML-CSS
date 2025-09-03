// Console - Terminal do navegador

console.log(console)


//window - janela do navegador
//window.alert("sim")
//alert("não")

// document = DOM ou seu código html inteiro
console.log(document)
console.log(document.head)
console.log(document.body)

// Acessar elementos do body


//Pega elementos pela tag
var titulos = document.getElementsByTagName("h1")
console.log(titulos)

// Pega elementos pela classe
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos)

// Pega elementos pelo id
var especifico = document.getElementById("p3")
console.log(especifico)

//Modificando propriedades de algum elemento
especifico.style.backgroundColor ="green"
especifico.style.color ="yellow"

//pego por class
paragrafos[0].style.backgroundColor = "Pink"

//pego por tag
titulos[2].style.backgroundColor = "orange"

function cliquei(){
    console.log("Eu falei pra você não clicar")
}

// crie um botão, que altere todos os tírulos para verde, e aumente a font 
// para 100px

function mudar(){
    for(var i=0; i< titulos.length ; i++){
    titulos[i].style.backgroundColor = "green"    
    titulos[i].style.color = "gray"
    titulos[i].style.fontSize = "50px" 

    }
}

function quemfoi(elemento){
    console.log(elemento);

}  