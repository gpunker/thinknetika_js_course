// фигуры
class BaseFigure {
    constructor(color) {
        this.color = color
    }
}

class Pawn extends BaseFigure {
    constructor(color) {
        super(color)
        this.canEvolve = false
    }
}

class Horse extends BaseFigure {
    constructor(color) {
        super(color)
    }
}

class Bishop extends BaseFigure {
    constructor(color) {
        super(color)
    }
}

class Rook extends BaseFigure {
    constructor(color) {
        super(color)
    }
}

class Queen extends BaseFigure {
    constructor(color) {
        super(color)
    }
}

class King extends BaseFigure {
    constructor(color) {
        super(color)
    }
}

class Desk {
    constructor() {}

    #figures = {
        // белые
        'A1': new Rook('white'),
        'B1': new Horse('white'),
        'C1': new Bishop('white'),
        'D1': new Queen('white'),
        'E1': new King('white'),
        'F1': new Bishop('white'),
        'G1': new Horse('white'),
        'H1': new Rook('white'),
        'A2': new Pawn('white'),
        'B2': new Pawn('white'),
        'C2': new Pawn('white'),
        'D2': new Pawn('white'),
        'E2': new Pawn('white'),
        'F2': new Pawn('white'),
        'G2': new Pawn('white'),
        'H2': new Pawn('white'),
        // черные
        'A7': new Pawn('black'),
        'B7': new Pawn('black'),
        'C7': new Pawn('black'),
        'D7': new Pawn('black'),
        'E7': new Pawn('black'),
        'F7': new Pawn('black'),
        'G7': new Pawn('black'),
        'H7': new Pawn('black'),
        'A8': new Rook('black'),
        'B8': new Horse('black'),
        'C8': new Bishop('black'),
        'D8': new Queen('black'),
        'E8': new King('black'),
        'F8': new Bishop('black'),
        'G8': new Horse('black'),
        'H8': new Rook('black'),
    }

    static get y() { return [1, 2, 3, 4, 5, 6, 7, 8] }
    static get x() { return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] }

    get figures() { return this.#figures }
}

class Game {
    constructor() {
    }
    
    #desk = new Desk()
    #turn = 'white'
    #history = []
    #killedFigures = []
    #turnCount = 0

    get desk() { return this.#desk }
    get turn() { return this.#turn }
    get history() { return this.#history }
    get killedFigures() { return this.#killedFigures }
    get turnCount() { return this.#turnCount }
}

const pawn = new Pawn('white')
console.log(pawn)
console.log((new Game).desk)