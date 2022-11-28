const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

let fraseNova = frase.replace("verde", "rosa")
fraseNova = fraseNova.replace("azul", "laranja")

console.log(`Frase: ${fraseNova}\n\nInclui verde? ${fraseNova.includes('verde')}
Inclui laranja? ${fraseNova.includes('laranja')}`)

fraseNova = fraseNova.replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR')

console.log(fraseNova)