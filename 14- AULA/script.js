// Criação do array
var array = ["Largatixa", 5,"dois",8.7, true]

// Mostra todo o array
console.log(array);

// Mostra o valor da posição especifica do array
console.log(array[2]);

array[2] = "Outro valor"

console.log(array);

var times = ["Real Madrid", "Liverpool", "Inter", "Chelsea"]

for(var i = 0; i< 4; i++){
console.log(times[i]);
}

console.log("----------------")

// Percorrendo o array descobrindo o tamanho dele
for (var i = 0; i < times.length; i++){
    console.log(times[i]);
}

console.log("----------------")

for (var index in times){
    console.log(times[index]);
}

// Manipulação do array
var frutas = ["Maçã", "Uva", "Pêra"]

console.log(frutas);

// push - adiciona no fim do array
frutas.push("Laranja")
console.log(frutas)

// pop - retira o último valor, e te retorna
var frutaTirada = frutas.pop()
console.log("Fruta tirada: ", frutaTirada);
console.log(frutas);

//  shift - retira o primeiro valor, e te retorna
var exPrimeiraFruta = frutas.shift()
console.log("Ex: ",exPrimeiraFruta);

//  unshift - adiciona no inicio do array
frutas.unshift("Tomate")
console.log(frutas);

