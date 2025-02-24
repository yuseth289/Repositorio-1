let puntosJugador1 = 0;
let puntosJugador2 = 0;

function jugar() {
    while (puntosJugador1 < 21 && puntosJugador2 < 21) {
        
        let puntosRondaJugador1 = Math.floor(Math.random() * 10) + 1;
        let puntosRondaJugador2 = Math.floor(Math.random() * 10) + 1;

        puntosJugador1 += puntosRondaJugador1;
        puntosJugador2 += puntosRondaJugador2;

        console.log(Ronda: Jugador 1 gana ${puntosRondaJugador1} puntos. Total: ${puntosJugador1});
        console.log(Ronda: Jugador 2 gana ${puntosRondaJugador2} puntos. Total: ${puntosJugador2});
        console.log('puntos de ronda');
    }

    
    if (puntosJugador1 >= 21) {
        console.log('¡Jugador 1 gana el juego con ' + puntosJugador1 + ' puntos!');
    } else {
        console.log('¡Jugador 2 gana el juego con ' + puntosJugador2 + ' puntos!');
    }
}

jugar();