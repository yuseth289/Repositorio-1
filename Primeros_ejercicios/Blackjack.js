const crearBaraja = () => {
    const palos = ['Corazones', 'Diamantes', 'Tréboles', 'Picas'];
    const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let baraja = [];
    for (let palo of palos) {
        for (let valor of valores) {
            baraja.push({ valor, palo });
        }
    }
    return baraja;
};

const barajar = (baraja) => {
    for (let i = baraja.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
    }
    return baraja;
};

const calcularPuntuacion = (mano) => {
    let puntuacion = 0;
    let ases = 0;
    for (let carta of mano) {
        if (carta.valor === 'A') {
            ases++;
            puntuacion += 11; // As inicialmente cuenta como 11
        } else if (['K', 'Q', 'J'].includes(carta.valor)) {
            puntuacion += 10;
        } else {
            puntuacion += parseInt(carta.valor);
        }
    }
    while (puntuacion > 21 && ases) {
        puntuacion -= 10; // Convertir un As de 11 a 1
        ases--;
    }
    return puntuacion;
};

const jugarBlackjack = () => {
    let baraja = barajar(crearBaraja());
    let manoJugador = [baraja.pop(), baraja.pop()];
    let manoDealer = [baraja.pop(), baraja.pop()];

    console.log("¡Bienvenido al Blackjack!");
    console.log(`Tu mano: ${manoJugador.map(carta => `${carta.valor} de ${carta.palo}`).join(', ')}`);
    
    let accion;
    do {
        accion = prompt("¿Pedir carta o Plantarse?").toLowerCase();
        if (accion === 'pedir carta') {
            manoJugador.push(baraja.pop());
            console.log(`Tu mano: ${manoJugador.map(carta => `${carta.valor} de ${carta.palo}`).join(', ')}`);
        }
    } while (accion === 'pedir carta' && calcularPuntuacion(manoJugador) <= 21);

    let puntuacionJugador = calcularPuntuacion(manoJugador);
    if (puntuacionJugador > 21) {
        console.log("Te has pasado de 21. ¡Pierdes!");
        return;
    }

    console.log(`Mano del Dealer: ${manoDealer.map(carta => `${carta.valor} de ${carta.palo}`).join(', ')}`);
    let puntuacionDealer = calcularPuntuacion(manoDealer);
    while (puntuacionDealer < 17) {
        manoDealer.push(baraja.pop());
        puntuacionDealer = calcularPuntuacion(manoDealer);
    }

    console.log(`Mano final del Dealer: ${manoDealer.map(carta => `${carta.valor} de ${carta.palo}`).join(', ')}`);
    console.log(`Tu puntuación: ${puntuacionJugador}, Puntuación del Dealer: ${puntuacionDealer}`);

    if (puntuacionDealer > 21 || puntuacionJugador > puntuacionDealer) {
        console.log("¡Ganaste!");
    } else if (puntuacionJugador < puntuacionDealer) {
        console.log("¡El Dealer gana!");
    } else {
        console.log("¡Es un empate!");
    }
};

jugarBlackjack();