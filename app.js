let amigos =[];
let nombreAmigos = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigos() {
    let nombre = nombreAmigos.value;
    if (nombre == 0) {
        alert("Por favor, inserte un nombre");
    } 
    amigos.push(nombre);
    document.getElementById("amigo").value;
    mostrarLista;    
}

function mostrarLista() {
    // limpiar lista html
    listaAmigos.innerHTML = "";
    //recorrer el array con for
    for (let i = 0; i < amigos.length; i++) {
    //crear una <li> por amigo
    let item = document.createElement("li");
    item.textContent = amigos[i];
    listaAmigos.appendChild(item);
    //insertar en el html
    }
}

function mostrarAmigo() {
    //validar array no vacio
    if (amigos.length > 0) {
        //generar indice aleatorio
        let indice = Math.floor(Math.random() * amigos.length);
        //mostrar nombre sorteado
        resultado.textContent = amigos[indice];    
}
