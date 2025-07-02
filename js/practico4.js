function esPar (num){
    if(num % 2 == 0){
        return true
    } else {
        return false
    }
}

const numero = parseInt(prompt("ingrese un numero"))

if(isNaN(numero)){
    console.log("ingrese un numero valido")
}else if(esPar(numero)){
    console.log("el numero es par")
}else{
    console.log("el numero es impar")
}