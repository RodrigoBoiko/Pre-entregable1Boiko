alert('Jugaremos BlackJack!');
confirm('Obtendras 2 Cartas de la Baraja de Naipes, usted decidira si pide otra o se planta! Buena Suerte!!.');

//Naipes disponibles
let baraja = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//Elegir número aleatorio
function aleatorio (min,max) {
	let numero = Math.floor(Math.random() * (max - min + 1) + min);
	return numero;
}

//Asignando valores de los naipes al usuario y a la consola
let jugadorNaipe1 = baraja[aleatorio(0,10)];
let jugadorNaipe2 = baraja[aleatorio(0,10)];
let jugadorNaipe3 = baraja[aleatorio(0,10)];

let maquinaNaipe1 = baraja[aleatorio(0,10)];
let maquinaNaipe2 = baraja[aleatorio(0,10)];
let maquinaNaipe3 = baraja[aleatorio(0,10)];

//suma de las cartas asignadas usuario
let jugadorResultado1 = jugadorNaipe1 + jugadorNaipe2;
let jugadorResultado2 = jugadorResultado1 + jugadorNaipe3;
//suma de las cartas asignadas maquina
let maquinaResultado1 = maquinaNaipe1 + maquinaNaipe2;
let maquinaResultado2 = maquinaResultado1 + maquinaNaipe3;

alert('Tu primera carta es ' + jugadorNaipe1);
alert('Tu siguiente carta es ' + jugadorNaipe2);

let opcionJugador = prompt('Hasta ahora tienes ' + jugadorResultado1 + '\n ¿Eliges Plantarte: 0 o Continuar : 1?', '0');

//R: el jugador se planta o continúa?
 if (opcionJugador == 0) {
 	alert('Te plantaste en ' + jugadorResultado1 + '\n La máquina se plantó en ' + maquinaResultado1);

 	if (jugadorResultado1 == 21) {
 		alert('BlackJack!');
 	}
 	else if (jugadorResultado1 == maquinaResultado1) {
 		alert('Hay un empate!');
 	}
 	else if (jugadorResultado1 > 21) {
 		alert('Perdiste el juego!');
 	}
 	else if(jugadorResultado1 < 21 && jugadorResultado1 > maquinaResultado1){
 		alert('Ganaste!');
 	}
 	else if(jugadorResultado1 < 21 && jugadorResultado1 < maquinaResultado1 && maquinaResultado1 <= 21){
 		alert('Perdiste el juego!');
 	}
 	else if(jugadorResultado1 < 21 && jugadorResultado1 < maquinaResultado1 && maquinaResultado1 > 21){
 		alert('Ganaste!');
 	}
 }
 else if (opcionJugador == 1) 
 	alert('Tu última carta es ' + jugadorNaipe3);
 	alert('Ahora sumaste un total de ' + jugadorResultado2 + '\n La máquina sumó un total de ' + maquinaResultado2);

 	if (jugadorResultado2 == 21) {
 		alert('BlackJack!');
 	}
 	else if (jugadorResultado2 == maquinaResultado2) {
 		alert('Hay un empate!');
 	}
 	else if (jugadorResultado2 > 21) {
 		alert('Perdiste el juego!');
 	}
 	else if(jugadorResultado2 < 21 && jugadorResultado2 > maquinaResultado2){
 		alert('Ganaste!');
 	}
 	else if(jugadorResultado2 < 21 && jugadorResultado2 < maquinaResultado2 && maquinaResultado2 <= 21){
 		alert('Perdiste el juego!');
 	}
 	else if(jugadorResultado2 < 21 && jugadorResultado2 < maquinaResultado2 && maquinaResultado2 > 21){
 		alert('Ganaste!');
 	}let