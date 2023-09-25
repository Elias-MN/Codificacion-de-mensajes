// VERSION 1: PROMPT

/*
let mensaje = prompt("Introduce el mensaje");

let mensajeCodificado = codificarMensaje();

console.log(`El mensaje secreto es: ${mensajeCodificado}`);

let mensajeCodificado;
function codificarMensaje() {
  mensajeCodificado = "";
  for (let i = 0; i < mensaje.length; i++) {
    if (mensaje.charCodeAt(i) == 122) //z==122
    {
      mensajeCodificado = mensajeCodificado.concat("a");
    }
    else if (mensaje.charAt(i) == 9) {
      mensajeCodificado = mensajeCodificado.concat("0");
    }
    else if (mensaje.charAt(i) == " ") {
      mensajeCodificado = mensajeCodificado.concat(" ");
    }
    else {
      mensajeCodificado = mensajeCodificado.concat(String.fromCharCode(mensaje.charCodeAt(i) + 1));
    }
  }

  mensajeCodificado = mensajeCodificado.toUpperCase();

  return mensajeCodificado;

}
*/


// VERSION 2: INPUT TEXT

let mensaje = document.getElementById('textEncode');
let buttonEncode = document.getElementById('buttonEncode');
let textEncoded = document.getElementById('textEncoded');
let textProgress = document.getElementById('textProgress');
let image = document.getElementById('image');

buttonEncode.addEventListener("click", codificarMensaje);

function codificarMensaje() {

  textEncoded.innerText = "";
  let mensajeCodificado = "";
  for (let i = 0; i < mensaje.value.length; i++) {
    if (mensaje.value.charCodeAt(i) == 122) //z==122
    {
      mensajeCodificado = mensajeCodificado.concat("a");
    }
    else if (mensaje.value.charAt(i) == 9) {
      mensajeCodificado = mensajeCodificado.concat("0");
    }
    else if (mensaje.value.charAt(i) == " ") {
      mensajeCodificado = mensajeCodificado.concat(" ");
    }
    else {
      // String.fromCharCode devuelve un valor unicode
      mensajeCodificado = mensajeCodificado.concat(String.fromCharCode(mensaje.value.charCodeAt(i) + 1));
    }
  }

  mensajeCodificado = mensajeCodificado.toUpperCase();
  buttonEncode.classList.toggle("hide");
  textProgress.classList.remove("hide");

  setTimeout(() => {
    buttonEncode.classList.remove("hide");
    textProgress.classList.toggle("hide");
    textEncoded.innerText = mensajeCodificado;
  }, 2000);


}

let nameImage;
image.addEventListener("click", () => {
  nameImage = image.src.substring(image.src.lastIndexOf('/') + 1, image.src.length)
  if (nameImage == 'abierto.png') {
    image.src = "./cerrado.png";
  } else {
    image.src = "./abierto.png"
  }
})

