const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".btn-copiar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

document.getElementById("textarea").addEventListener("keypress", verificar);
function verificar(e) {
    if (e.key.match(/[a-zñ\s]/g) === null) {
        e.preventDefault();
        alert("Ingrese su texto en minúsculas");
    }
}

function btnEncriptar() {
    const texto = encriptar(textArea.value);
    mensaje.value = texto;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    copiar.style.display = "block";
}

function encriptar(textoEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();//Conversion a minusculas
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncriptado;
}
function btnDesencriptar() {
    const texto = desencriptar(textArea.value);
    mensaje.value = texto;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    copiar.style.display = "block";
}
function desencriptar(textoDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();//Conversion a minusculas
    for(let i=0; i<matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencriptado;
}

function copiarTexto() {
    /* Selecciona el contenido del elemento "mensaje" */
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); /* Para dispositivos móviles */
    /* Copia el contenido seleccionado al portapapeles */
    document.execCommand("copy");
    alert("El texto ha sido copiado!");
}

copiar.addEventListener("click", copiarTexto);
