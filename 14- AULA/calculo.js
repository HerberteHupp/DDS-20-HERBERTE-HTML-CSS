 // Criando os arrays

 var alunos =[]
 var notasA =[]
 var notasB =[]

 //função para cadastro
 function cadastro(){
    for(var i = 0 ; i < 3 ; i++){
      alunos[i] = prompt("Digite um nome: ")
      notasA[i] = prompt("Digite a nota:")
      notasB[i] = prompt("Digite a nota:") 

 }
}

//função para calcular a média
function calcularMedia(nota1, nota2){
    let mediaFinal = ((nota1 * 0.4) + (nota2 * 0.6))
    return mediaFinal
}

//Verificar Situação
function situacao(media){
    if(media >=7){
        return "Aprovado"
    }

    else if(media >=5){
        return "Recuperação"
    }

    else{
        return "Reprovado"
    }

}


// Mostrar o resultado
function mostrarResultados(){
    for(var i in alunos){

    let notaPri = notasA[i]
    let notaSeg = notasB[i]
    let mediaAtual = calcularMedia(notaPri, notaSeg)

    let situacaoAtual = situacao(mediaAtual)

    console.log(" O aluno", alunos[i], "teve a média" , mediaAtual ,"." )
    console.log(" A Situação do aluno é:", situacaoAtual )


   }   
}




cadastro();
mostrarResultados()

console.log(alunos)
console.log(notasA)
console.log(notasB)

