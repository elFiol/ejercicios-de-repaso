const numero = parseInt(prompt("ingrese un numero: "))
let numeros = 0
if(isNaN(numero)|| numero < 0){
    console.log("debe ingresar un numero mayor a 0")
}else{
    for(let i = numero; i > 0; i--){
        console.log(i)
        numeros += i
    }
    console.log("la suma de todos los numeros es: " + numeros)
}