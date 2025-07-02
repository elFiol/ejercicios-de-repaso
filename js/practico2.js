const edad = parseInt(prompt("ingrese la edad: "))
if(isNaN(edad)){
    console.log("ese dato no es un numero")
}else{
    if(edad<18){
        console.log("no puede pasar")
    }else{
        console.log("puede pasar")
    }
}