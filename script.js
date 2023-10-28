function calculoRankeada (vitorias, derrotas){
   let resultado = vitorias - derrotas
   console.log()
   let nivel = ""
  
   if(resultado <= 10){
    nivel = "Ferro."
   } else if(resultado >= 11 && resultado <= 20){
    nivel = "Bronze."
   } else if(resultado >= 21 && resultado <= 50){
    nivel = "Prata."
   } else if(resultado >= 51 && resultado <= 80){
    nivel = "Ouro"
   } else if(resultado >= 81 && resultado <= 90){
    nivel = "Diamante"
   } else if(resultado >= 91 && resultado <= 100){
    nivel = "Lendário"
   } else if(resultado >= 101){
    nivel = "Imortal"
   }
   
   return "O herói " + nome + " tem de saldo de " + resultado + " está no nível de " + nivel
}

let nome = "Wanderson Lucio"
let vitorias = 50
let derrotas = 5

let resultado = calculoRankeada(vitorias, derrotas)
console.log(resultado)