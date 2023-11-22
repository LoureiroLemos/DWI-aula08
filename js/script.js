console.log("Hello World!");

//não é tipada -> não precisa específicar o tipo de cada variável


//array
var lista = ["sc", "pr", "rs", "mg", "sp"];

//objeto
var pessoa = {
    nome: "Pedro",
    dtNascimento: "05/06/1993",
    endereço: "Matinhos"
}

var estados ={
    sc: "Santa Catarina",
    pr: "Parana",
    rs: "Rio Grande do Sul"
}

// for ... in -> iterar sobre propriedades de um objeto

for (chave in estados) {
    console.log(chave + ": " + estados[chave] )
    }


// for ... of -> iterar sobre elementos de uma lista
for (pos of lista) {
    console.log(pos)
}

//for each -> aplicar uma função sobre cada um dos elementos

function imprimir (elemento){
    console.log("-" +elemento);
}

lista.forEach(imprimir);


//Arrow functions 


