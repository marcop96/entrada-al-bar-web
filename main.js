const botonConfirmar = document.querySelector(".boton-confirmar")

botonConfirmar.onclick = function () {
    let respuestaEntrada;
    const nombreUsuario = document.querySelector(".nombre-usuario").value
    const edadUsuario = Number(document.querySelector(".edad-usuario").value)
    if (edadUsuario == "") {
        respuestaEntrada = "no ingresaste nada!"
    }
    else if (edadUsuario >= 18) {
        respuestaEntrada = "bienvenido al bar"
    }
    else if (edadUsuario < 18) { respuestaEntrada = "no podés pasar" }

    document.querySelector(".respuesta-entrada").innerText = `Hola ${nombreUsuario}, ${respuestaEntrada}`

    return false
}

/*botón resetear
 cambia el .respuesta entrada a vacio
*/

