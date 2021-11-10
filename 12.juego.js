console.log('Juego js utilizando todo lo aprendido hasta ahorita')

function Jugador(nombre){

    //Propiedades
    this.nombre = nombre
    this.puntosVida = 100
    this.poderEspecial = 100

    //Métodos

    //Método para curar a un jugador
    this.curarJugador = function(jugadorParaCurar){

        if (this.poderEspecial >= 40){
            this.poderEspecial -= 40
            jugadorParaCurar.puntosVida += 20
        }else{
            console.log(`${this.nombre} no tiene poder especial suficiente para curar a ${jugadorParaCurar.nombre}`)
        }

        this.estadoDelJugador(jugadorParaCurar)
    }

    //Método para atacar a un jugador
    this.atacarJugador = function(jugadorParaAtacar){

        if (jugadorParaAtacar.puntosVida >= 25){
            jugadorParaAtacar.puntosVida -= 25
        }else{
            jugadorParaAtacar.puntosVida = 0
            console.log(`${jugadorParaAtacar.nombre} ha muerto!!!`)
        }
        this.estadoDelJugador(jugadorParaAtacar)
    }

    //Método para imprimir el estado de los jugadores
    this.estadoDelJugador = function(estadoJugador){
        console.info(this)
        console.info(estadoJugador)
    }
}

var gandalf = new Jugador('Gandalf')
var legolas = new Jugador('Legolas')

gandalf.curarJugador(legolas)
gandalf.atacarJugador(legolas)