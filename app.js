let amigos =[];
let nombreAmigos = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

let btnAñadir = document.getElementById("Añadir");
btnAñadir.addEventListener("click", agregarAmigo);

let btnSortear = document.getElementById("Sortear");
btnSortear.addEventListener("click", mostrarAmigo);

function agregarAmigo() {
    let nombre = nombreAmigos.value;
      
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return; 
    } 
    
    if (soloLetras(nombre)) {
     amigos.push(nombre);
} else {
    alert("Solo se permiten letras y espacios");
    return;
}
    nombreAmigos.value = "";
    mostrarLista();    
}

function mostrarLista() {
    listaAmigos.innerHTML = "";
   
    for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    listaAmigos.appendChild(item);
    }
}

function mostrarAmigo() {
    
    if (amigos.length === 0) {
       
        alert("No hay amigos para sortear");
        return;
    }  let indice = Math.floor(Math.random() * amigos.length);
       let amigoSorteado = amigos[indice];
       resultado.textContent = `\uD83C\uDF89 Amigo sorteado: ${amigoSorteado}`;

       listaAmigos.innerHTML = "";
      
       amigos = [];
}

function soloLetras(texto) {
  return /^[a-zA-Z\s]+$/.test(texto);
}
