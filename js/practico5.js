const frutas = ["pera","manzana","banana","sandia","anana"]
console.log("hay " + frutas.length + " frutas")
frutas.shift()
frutas.push("uvas")
console.log(frutas)
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}