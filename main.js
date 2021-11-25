const botonConfirmar = document.querySelector(".boton-confirmar")
const botonResetear = document.querySelector(".boton-resetear")
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

botonResetear.onclick = function () {
    nombreUsuario = document.querySelector(".nombre-usuario").value = ""
    edadUsuario = document.querySelector(".edad-usuario").value = ""
    respuestaEntrada = document.querySelector(".respuesta-entrada").innerText = "Hola, cómo te llamas y cuántos años tenés?"
}


