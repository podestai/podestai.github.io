// Actividad tarea

let tarantino = document.getElementById("tarantino");
let gilligan = document.getElementById("gilligan");
let fincher = document.getElementById("fincher");
let coppola = document.getElementById("coppola");
let spielberg = document.getElementById("spielberg");
let adivinanza = document.getElementById("botones");
let alerta =  document.createElement("div");
let intentos =  document.getElementById("intentos");
let spanContador = document.getElementById("count");
let director = document.getElementById("director");
let ayuda = document.getElementById("ayuda");
let contador = 5;
/*
tarantino.addEventListener("click", () => {
    
});

coppola.addEventListener("click", () => {

});

*/

function stop() {

    coppola.style.display = "none";
    fincher.style.display = "none";
    spielberg.style.display = "none";
    gilligan.style.display = "none";
    tarantino.style.display = "none";
    intentos.className = "alert alert-danger";
    intentos.innerHTML = "Se acabaron los intentos. Respuesta correcta: Vince Gilligan"; 
    ayuda.style.display = "none";
    
}

function help() {
    spielberg.style.display = "none";
    tarantino.style.display = "none";
    ayuda.style.display = "block";
    ayuda.innerHTML = "Ayudita";

}

fincher.addEventListener("click", () => {
    intentos.style.display = "block";
    contador--;
    spanContador.innerHTML = " " +  contador;
   
    if(contador == 0) {
        stop();
    }

    if(contador == 1) {
        help();
    }   
});

coppola.addEventListener("click", () => {
    intentos.style.display = "block";
    contador--;
    spanContador.innerHTML = " " +  contador;
   
    if(contador == 0) {
        stop();
    }

    if(contador == 1) {
        help();
    }

});

tarantino.addEventListener("click", () => {
    intentos.style.display = "block";
    contador--;
    spanContador.innerHTML = " " +  contador;
   
    if(contador == 0) {
        stop();
    }

    if(contador == 1) {
        help();
    }

});

spielberg.addEventListener("click", () => {
    intentos.style.display = "block";
    contador--;
    spanContador.innerHTML = " " +  contador;
   
    if(contador == 0) {
        stop();
    }

    if(contador == 1) {
        help();
    }

});


gilligan.addEventListener("click", () => {

    tarantino.style.display = "none";
    fincher.style.display = "none";
    coppola.style.display = "none";
    spielberg.style.display = "none";
    ayuda.style.display = "none";
    intentos.style.display = "none";
    gilligan.className = "btn-success rounded p-2";
    alerta.innerHTML = "¡Muy bien!";
    adivinanza.className = "alert alert-success" ;
    adivinanza.appendChild(alerta);
    

});