const textoUsuario = document.getElementById("textarea-usuario");
const textoEncriptado = document.getElementById("texto-encriptado");
const areaTextoEncriptado = document.getElementById("area-texto-encriptado");
const alertas = document.getElementById("no-text");
const muñeco = document.getElementById("muneco");
const copiar = document.getElementById("copiar");

function encriptar(texto = textoUsuario.value.toLowerCase()) {
  if (textoUsuario.value === "") {
    areaTextoEncriptado.style.display = "none";
    muñeco.style.display = "";
    alertas.style.display = "block";
    copiar.style.display = "none";
  } else {
    const resultado = texto
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    textoEncriptado.innerHTML = resultado;
    areaTextoEncriptado.style.display = "block";
    muñeco.style.display = "none";
    alertas.style.display = "none";
    copiar.style.display = "block";
    return resultado;
  }
}

function desencriptar(texto = textoUsuario.value.toLowerCase()) {
  if (textoUsuario.value === "") {
    areaTextoEncriptado.style.display = "none";
    muñeco.style.display = "";
    alertas.style.display = "block";
    copiar.style.display = "none";
  } else {
    const resultado = texto
      .replaceAll("ufat", "u")
      .replaceAll("ober", "o")
      .replaceAll("ai", "a")
      .replaceAll("imes", "i")
      .replaceAll("enter", "e");
    textoEncriptado.innerHTML = resultado;
    areaTextoEncriptado.style.display = "block";
    muñeco.style.display = "none";
    alertas.style.display = "none";
    copiar.style.display = "block";
    return resultado;
  }
}

function botonCopiar() {
  navigator.clipboard.writeText(textoEncriptado.innerHTML);
}
