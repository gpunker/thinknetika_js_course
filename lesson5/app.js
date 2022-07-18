// фигуры
class BaseFigure {
    constructor(color, desk) {
        this.color = color
        this.desk = desk
    }
}

class Pawn extends BaseFigure {
    constructor(color, desk) {
        super(color, desk)
        this.canEvolve = false
    }
}

class Horse extends BaseFigure {
    constructor(color, desk) {
        super(color, desk)
    }
}

class Bishop extends BaseFigure {
    constructor(color, desk) {
        super(color, desk)
    }
}

class Rook extends BaseFigure {
    constructor(color, desk) {
        super(color, desk)
    }
}

class Queen extends BaseFigure {
    constructor(color, desk) {
        super(color, desk)
    }
}

class King extends BaseFigure {
    constructor(color, desk) {
        super(color, desk)
    }
}

// доска
class Desk {
    constructor() {
        // генерируем координаты
        let coords = {}

        Desk.x.forEach(function(x) {
            return Desk.y.forEach(function(y) {
                return coords[`${x}${y}`] = {}
            })
        })

        // генерируем фигуры на доске
        // белые
        coords['A1'] = new Rook('white', this),
        coords['B1'] = new Horse('white', this),
        coords['C1'] = new Bishop('white', this),
        coords['D1'] = new Queen('white', this),
        coords['E1'] = new King('white', this),
        coords['F1'] = new Bishop('white', this),
        coords['G1'] = new Horse('white', this),
        coords['H1'] = new Rook('white', this),
        coords['A2'] = new Pawn('white', this),
        coords['B2'] = new Pawn('white', this),
        coords['C2'] = new Pawn('white', this),
        coords['D2'] = new Pawn('white', this),
        coords['E2'] = new Pawn('white', this),
        coords['F2'] = new Pawn('white', this),
        coords['G2'] = new Pawn('white', this),
        coords['H2'] = new Pawn('white', this),
        // черные
        coords['A7'] = new Pawn('black', this),
        coords['B7'] = new Pawn('black', this),
        coords['C7'] = new Pawn('black', this),
        coords['D7'] = new Pawn('black', this),
        coords['E7'] = new Pawn('black', this),
        coords['F7'] = new Pawn('black', this),
        coords['G7'] = new Pawn('black', this),
        coords['H7'] = new Pawn('black', this),
        coords['A8'] = new Rook('black', this),
        coords['B8'] = new Horse('black', this),
        coords['C8'] = new Bishop('black', this),
        coords['D8'] = new Queen('black', this),
        coords['E8'] = new King('black', this),
        coords['F8'] = new Bishop('black', this),
        coords['G8'] = new Horse('black', this),
        coords['H8'] = new Rook('black', this)

        this.#coords = coords
    }

    #coords = {}

    static get y() { return [1, 2, 3, 4, 5, 6, 7, 8] }
    static get x() { return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] }

    get coords() { return this.#coords }
}

// игра
class Game {
    constructor() {
    }
    
    #state = Game.states[0]
    #desk = new Desk()
    #turn = 'white'
    #history = []
    #killedFigures = []
    #turnCount = 0

    static get states() { return ['continue', 'white wins', 'black wins'] }

    get desk() { return this.#desk }
    get turn() { return this.#turn }
    get history() { return this.#history }
    get killedFigures() { return this.#killedFigures }
    get turnCount() { return this.#turnCount }
    get state() { return this.#state }
}

console.log((new Game).desk.coords)