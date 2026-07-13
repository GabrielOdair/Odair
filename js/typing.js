const typing = document.getElementById("typing");

if (typing) {

const textos = [

"Desenvolvedor Front-end",

"Estudando JavaScript",

"Futuro Desenvolvedor React",

"Criando Interfaces Modernas"

];

let indiceTexto = 0;

let indiceLetra = 0;

let apagando = false;

function escrever(){

typing.textContent = textos[indiceTexto].substring(0, indiceLetra);

if(!apagando){

indiceLetra++;

if(indiceLetra > textos[indiceTexto].length){

apagando = true;

setTimeout(escrever,1500);

return;

}

}else{

indiceLetra--;

if(indiceLetra < 0){

apagando = false;

indiceTexto++;

if(indiceTexto >= textos.length){

indiceTexto = 0;

}

}

}

setTimeout(escrever,apagando ? 50 : 90);

}

escrever();

}