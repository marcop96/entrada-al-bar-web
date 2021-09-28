const botonConfirmar = document.querySelector(".boton-confirmar")

botonConfirmar.onclick = function(){
let respuestaEntrada;
const nombreUsuario = document.querySelector(".nombre-usuario").value
const edadUsuario = Number(document.querySelector(".edad-usuario").value) //acá no me deja poner value/innertext
if(edadUsuario>=18){
respuestaEntrada= "bienvenido"
}
else{respuestaEntrada= "no podés pasar"}
document.querySelector(".respuesta-entrada").innerText = `Hola ${nombreUsuario}, ${respuestaEntrada}`

return false
}