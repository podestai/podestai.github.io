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
let estreno = document.getElementById("preguntaEstreno");
let conteoEstreno = document.getElementById("anioEstreno");
let cantidadEstreno = document.getElementById("cantidadEstreno");
let respuesta = document.getElementById("respuesta");
let input = document.getElementById("estreno");
let triviaYear = document.getElementById("triviaYear");
let wrongYearAlert = document.getElementById("wrongYear");
let correctYearAlert = document.getElementById("correctYear");
let contador = 3;

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


let intentosEstreno = 3;

function correctYear(year) {
    
    intentosEstreno--;
    conteoEstreno.style.display = "block";
    cantidadEstreno.innerHTML = intentosEstreno;
    
    if(year == 2008) {
        estreno.style.display = "none";
        correctYearAlert.className = "alert alert-success";
        correctYearAlert.style.display = "block";
        
    } else {
        console.log("equivocado");
    }
    
    if(intentosEstreno === 0) {

        wrongYearAlert.className = "alert alert-danger";
        wrongYearAlert.style.display = "block";  
        estreno.style.display = "none";
        cantidadEstreno.innerHTML = "Breaking Bad se estrenó en el año 2008";
    }
}


estreno.addEventListener("keyup", (event) => {

    let year = input.value;

    if(event.keyCode === 13) {
        correctYear(year);
    }
});

