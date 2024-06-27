let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let rangoMaximo = 10;
//Modificar elementos 
function agregarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//Click botón Usr
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    if(numeroUsuario == numeroSecreto){
        agregarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} `)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (numeroUsuario < numeroSecreto) {
            agregarTextoElemento('p','El número es mayor');
        }else if(numeroUsuario >numeroSecreto){
            agregarTextoElemento('p', 'El número es menor')
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    let limpiar = document.querySelector('#numeroUsuario');
    limpiar.value ='';
}

//Generar un número aleatorio
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * rangoMaximo + 1);
        console.log(numeroGenerado);
        console.log(numerosSorteados);  
    if(numerosSorteados.length == rangoMaximo){
        agregarTextoElemento('p','Ya se generaron el todos los números');
        //si el número generado esta incluido a la lista
    } else {
        if (numerosSorteados.includes(numeroGenerado)) {
            
            return generarNumeroSecreto();
        }else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //indicar intervalos de números
    //Generar el número secreto
    funcionesIniciales();
    //Desabilitar el botón nuevo intento 
    document.getElementById('reiniciar').setAttribute('disabled','true');
    //Limpiar lista cuando cundo se tenga 10 números
   
}

function funcionesIniciales(){
    agregarTextoElemento('h1','Juego del Número Secreto');
    agregarTextoElemento('p',`Indica un número del 1 al ${rangoMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

funcionesIniciales();





