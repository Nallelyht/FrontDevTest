$(document).ready(function(){
  $('.slider').slider({height: 600,transition:800, interval:6000,});
  $(".button-collapse").sideNav();
  $('.modal').modal();
});
/*  se declaran 4 variables dos son anagramas y las otras no*/
var palabra1= "ana"; 
var palabra2="naa";

var palabra3="holo";
var palabra4="hola";

/*se declara funcion para comprar las palabras*/
var anagrama = function(p1,p2){
  /*se hace una comparacion de las palabras sean iguales , el metodo .split() divide el split letra por letra, el metodo .sort() las ordena y el metodo .join() las une. En el primer ejemplo de palabras compara aan === aan por que separa, ordena y une las letras si son iguales muestra en consola que es un anagrama, esta funcion solo funciona con letras minusculas*/
  if (p1.split("").sort().join("") === p2.split("").sort().join("")){
    console.log("es un anagrama")
  } else {
    console.log("no es un anagrama")
  }
}

anagrama(palabra1,palabra2);
anagrama(palabra3, palabra4)