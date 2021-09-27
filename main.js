const botonConfirmar = document.querySelector(".boton-confirmar")

botonConfirmar.onclick = function(){
let respuestaEntrada;
const edadUsuario = Number(document.querySelector(".edad-usuario")) //acá no me deja poner value/innertext
if(edadUsuario>=18){
respuestaEntrada= "bienvenido"
}
else{respuestaEntrada= "no podés pasar"}

return false
}