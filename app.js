//crear array donde voy a guardad los nombres
let nombres = [];           
//obtener elementos del DOM
let input = document.getElementById("amigo");
let boton = document.getElementById("agregarAmigo()");
let lista = document.getElementById("listaAmigos");

//crear funcion para agregar un nombre al array
//leer el input
//verificar si el input no esta vacio
//si no esta vacio agregar el nombre al array
//limpia el input
//llama a la funcion que actualiza lista en pantalla                                                                      
 function agregarAmigo(){
    let nombre = input.value;
    if(nombre != ""){
        nombres.push(nombre);
        input.value = "";
        actualizarLista();
        }
 }
//crear una funcion para mostrar la lista actualizada en pantalla
function actualizarLista(){
    lista.innerHTML = "";
    for(let i = 0; i < nombres.length; i++){
        let li = document.createElement("li");
        li.textContent = nombres[i];
        lista.appendChild(li);
        }
    }

//conectar el boton con la funcion