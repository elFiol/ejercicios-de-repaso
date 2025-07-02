const usuario = {
  dinero: 4,
  carrito: [],
};
const productos = [
  { producto: "coca cola", precio: 1 },
  { producto: "emparedado", precio: 2 },
  { producto: "pizza", precio: 3 },
  { producto: "Fanta", precio: 1 },
  { producto: "hamburguesa", precio: 4 },
];
function recorrerLista() {
  let lista = "";
  for (let i = 0; i < productos.length; i++) {
    lista += i + ". " + productos[i].producto + " $ " + productos[i].precio + "   ";
  }
  return lista;
}

alert("bienvenido a bar el fiol");
do {
  const usuarioDecision = parseInt(prompt("elija que quiere llevar:" + recorrerLista()));
  if (isNaN(usuarioDecision) || usuarioDecision > productos.length){
    alert("ingrese un numero valido")
  } else if (usuario.dinero < productos[usuarioDecision].precio){
    alert("dinero insuficiente")
  } else{
    usuario.dinero -= productos[usuarioDecision].precio
    usuario.carrito.push(productos[usuarioDecision].producto)
    alert("se compro exitosamente")
  }
} while (confirm("desea seguir comprando?"));

console.log(usuario.carrito)
console.log("$"+usuario.dinero)