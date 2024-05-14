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