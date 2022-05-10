var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#copiar");

const inputResultado = document.querySelector("#texto-derecho");
const inputMsg = document.querySelector("#input-texto");



function encriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var cifradoTxt = texto.replace(/e/igm,"enter");
    var cifradoTxt = cifradoTxt.replace(/o/igm,"ober");
    var cifradoTxt = cifradoTxt.replace(/i/igm,"imes");
    var cifradoTxt = cifradoTxt.replace(/a/igm,"ai");
    var cifradoTxt = cifradoTxt.replace(/u/igm,"ufat");

    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("titulo-imagen").style.display = "none";
    document.getElementById("texto-derecho").innerHTML = cifradoTxt;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var cifradoTxt = texto.replace(/enter/igm,"e");
    var cifradoTxt = cifradoTxt.replace(/ober/igm,"o");
    var cifradoTxt = cifradoTxt.replace(/imes/igm,"i");
    var cifradoTxt = cifradoTxt.replace(/ai/igm,"a");
    var cifradoTxt = cifradoTxt.replace(/ufat/igm,"u");

    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("titulo-imagen").style.display = "none";
    document.getElementById("texto-derecho").innerHTML = cifradoTxt;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    var msgEncriptado = inputResultado.value;
    navigator.clipboard.writeText(msgEncriptado);
    inputMsg.value = "";
    inputMsg.focus();
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;