var textoRecivido = document.getElementById('textoRecivido');
var textoEncriptado = document.getElementById('textoEncriptado');
var encriptarBtn = document.getElementById('encriptarBtn')
var desencriptarBtn = document.getElementById('desencriptarBtn');
var contenItems = document.getElementById('conten-items');
var textoRealizado = document.getElementById('texto-realizado');
var contenidoEncriptado = document.getElementById('conten-texto');
var copiar = document.getElementById('copiar')
var buttonCopiar = document.querySelector('.copiar');
var copiarBtn = document.getElementById('Copiar-btn');
var limpiar = document.getElementById('limpiar');

function copiarTexto (elemento){
    navigator.clipboard.writeText(elemento.textContent);
}

contenidoEncriptado.style.display ="none";

textoRecivido.focus();

function encriptar(){
var stringEncriptado = textoRecivido.value;

if(true){
    stringEncriptado =  stringEncriptado.replace(/e/g, "eNter");
    stringEncriptado =  stringEncriptado.replace(/i/g, "imeS");
    stringEncriptado =  stringEncriptado.replace(/a/g, "aI");
    stringEncriptado =  stringEncriptado.replace(/o/g, "oBer");
    stringEncriptado =  stringEncriptado.replace(/u/g, "uFat");
    stringEncriptado =  stringEncriptado.replace(/ /g, '~');
}
contenItems.style.display = "none";
contenidoEncriptado.style.display ="grid";

textoRealizado.innerHTML = stringEncriptado;
return console.log(stringEncriptado);

}

function desencriptar(){
    var stringDesencriptado = textoRecivido.value;
    
    if(true){

        stringDesencriptado =  stringDesencriptado.replace(/eNter/g, "e");
        stringDesencriptado =  stringDesencriptado.replace(/imeS/g, "i");
        stringDesencriptado =  stringDesencriptado.replace(/aI/g, "a");
        stringDesencriptado =  stringDesencriptado.replace(/oBer/g, "o");
        stringDesencriptado =  stringDesencriptado.replace(/uFat/g, "u");
        stringDesencriptado =  stringDesencriptado.replace(/~/g, " ");
    }

    contenItems.style.display = "none";
    contenidoEncriptado.style.display ="grid";
    
    textoRealizado.innerHTML = stringDesencriptado;
    return console.log(stringDesencriptado);
}



function clickCopiar (){
    buttonCopiar.style.color = "white";
    copiarBtn.textContent = "Copiado";

    setTimeout(()=>{
        buttonCopiar.style.color = 'rgb(2, 194, 2)';
        copiarBtn.textContent = 'Copiar';
    }, 3000)

    copiarTexto(textoRealizado);
    
}
function reiniciar (){

    contenidoEncriptado.style.display ="none";
    contenItems.style.display = "flex";
} 

limpiar.onclick = reiniciar;
buttonCopiar.onclick = clickCopiar;
encriptarBtn.onclick = encriptar;
desencriptarBtn.onclick = desencriptar;