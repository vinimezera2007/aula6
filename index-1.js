
let nome 
let idade

console.log(typeof nome, typeof idade)

// O console imprimiu undefined, porque as variáveis ainda não possuem valor ou tipo 

nome = prompt("Qual é o seu nome")
idade = prompt("Qual é a sua idade")

console.log(typeof nome, typeof idade)

// agora, os tipos são strings, porque o prompt sempre retorna o tipo string

console.log("Olá", nome, "você tem", idade, "anos")