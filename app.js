


function validacionTexto(texto){
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;
    let textoVacio = "";

    if(texto.match(mayusculas) || texto.match(caracteres)){
        window.alert("No se permiten mayusculas o caracteres especiales");
        return true;
    }else if (texto == textoVacio ){
        window.alert("Ingresa algún texto para poder encriptarlo");
        return true;
    }else{
        return false;
    }
}



const buttonEncriptar = document.querySelector("#button-encriptar");
// Lo que quiero hacer en este evento es que cuando se presione boton encriptar valide y encripte
buttonEncriptar.addEventListener("click", function () {

    const textareaEscritura = document.querySelector("#textarea-escritura").value;
    const textoDelTextArea = textareaEscritura;
    if (validacionTexto(textoDelTextArea) == false) {
        let encriptar = encriptarTexto(textoDelTextArea);
        let mostrarEncriptacion = document.querySelector("#textarea-mostrar-cifrado")
        mostrarEncriptacion.value = encriptar


    }else{
        textoDelTextArea = "";
    }
                            
})

const reglasEncriptamiento = {
    "a":"d",
    "b":"e",
    "c":"f",
    "d":"g",
    "e":"h",
    "f":"i",
    "g":"j",
    "h":"k",
    "i":"l",
    "j":"m",
    "k":"n",
    "l":"o",
    "m":"p",
    "n":"q",
    "o":"r",
    "p":"s",
    "q":"t",
    "r":"u",
    "s":"v",
    "t":"w",
    "u":"x",
    "v":"y",
    "w":"z",
    "x":"a",
    "y":"b",
    "z":"c",
                            }


function encriptarTexto(textoDelTextArea){
    let encriptar = "";

    for(let i = 0; i < textoDelTextArea.length; i++){
        const letra = textoDelTextArea[i];
        if(letra in reglasEncriptamiento){
            encriptar += reglasEncriptamiento[letra];
        }else{
            encriptar += letra
        }
    }
    return encriptar
}

const buttonDesencriptar = document.querySelector("#button-desencriptar");

buttonDesencriptar.addEventListener("click", function (){

    const textareaEncriptada = document.querySelector("#textarea-mostrar-cifrado").value;
    const textareaDesencriptada = desencriptarTexto(textareaEncriptada);
    const textareaEscritura = document.querySelector("#textarea-escritura");

    const mostrarDesencriptado = document.querySelector("#textarea-mostrar-cifrado");
    mostrarDesencriptado.value = textareaDesencriptada;

    
    textareaEscritura.value = "";

})


function desencriptarTexto(textoEncriptado) {
    let desencriptar = "";

    for (let i = 0; i < textoEncriptado.length; i++) {
        const letra = textoEncriptado[i];
        const letraOriginal = Object.entries(reglasEncriptamiento).find(entry => entry[1] === letra);

        if (letraOriginal) {
            desencriptar += letraOriginal[0];
        } else {
            desencriptar += letra;
        }
    }

    return desencriptar;
}


const buttonCopiar = document.querySelector(".button-copiar");

buttonCopiar.addEventListener("click", function () {
    const textareaCifrado = document.querySelector("#textarea-mostrar-cifrado");

    // Seleccionar el texto del textarea
    textareaCifrado.select();
    textareaCifrado.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Desseleccionar el texto
    window.getSelection().removeAllRanges();

    // Limpiar el contenido del textarea después de copiar
    textareaCifrado.value = "";

    // Mostrar un mensaje de éxito o realizar cualquier otra acción deseada
    alert("Texto copiado al portapapeles");
});
