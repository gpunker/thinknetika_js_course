// фигуры
class BaseFigure {
    constructor(color, desk, cell) {
        this.color = color
        this.desk = desk
        this.cell = cell

        this.#x = cell[0]
        this.#y = Number(cell[1])
    }

    moves() {
        throw Error('Function `moves` is not implemented')
    }

    #x = null
    #y = null

    get x() { return this.#x }
    get y() { return this.#y }
}

class Pawn extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
        this.canEvolve = false
        this.doubleMove = true
    }

    moves() {
        let available = []

        // проверяем проход вперед
        if (this.desk.coords[`${this.x}${this.y + 1}`] === null) {
            available.push(`${this.x}${this.y + 1}`)

            if (this.doubleMove && this.desk.coords[`${this.x}${this.y + 2}`] === null) {
                available.push(`${this.x}${this.y + 2}`)
            }
        }

        // проверяем возможность пройти по диагонали, чтобы срубить фигуру
        let xIndex = Desk.x.findIndex( (item) => this.x === item )
        let availableAttacks = [Desk.x[xIndex - 1], Desk.x[xIndex + 1]]
        availableAttacks.forEach((aX) => {
            if (aX !== undefined && this.desk.coords[`${aX}${this.y + 1}`] !== null) {
                available.push(`${aX}${this.y + 1}`)
            }
        })

        return available
    }
}

class Horse extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }
}

class Bishop extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }
}

class Rook extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }
}

class Queen extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }
}

class King extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }
}

// доска
class Desk {
    constructor() {
        // генерируем координаты
        let coords = {}

        Desk.x.forEach(function(x) {
            return Desk.y.forEach(function(y) {
                return coords[`${x}${y}`] = null
            })
        })

        // генерируем фигуры на доске
        // белые
        coords['A1'] = new Rook('white', this, 'A1'),
        coords['B1'] = new Horse('white', this, 'B1'),
        coords['C1'] = new Bishop('white', this, 'C1'),
        coords['D1'] = new Queen('white', this, 'D1'),
        coords['E1'] = new King('white', this, 'E1'),
        coords['F1'] = new Bishop('white', this, 'F1'),
        coords['G1'] = new Horse('white', this, 'G1'),
        coords['H1'] = new Rook('white', this, 'H1'),
        coords['A2'] = new Pawn('white', this, 'A2'),
        coords['B2'] = new Pawn('white', this, 'B2'),
        coords['C2'] = new Pawn('white', this, 'C2'),
        coords['D2'] = new Pawn('white', this, 'D2'),
        coords['E2'] = new Pawn('white', this, 'E2'),
        coords['F2'] = new Pawn('white', this, 'F2'),
        coords['G2'] = new Pawn('white', this, 'G2'),
        coords['H2'] = new Pawn('white', this, 'H2'),
        // черные
        coords['A7'] = new Pawn('black', this, 'A7'),
        coords['B7'] = new Pawn('black', this, 'B7'),
        coords['C7'] = new Pawn('black', this, 'C7'),
        coords['D7'] = new Pawn('black', this, 'D7'),
        coords['E7'] = new Pawn('black', this, 'E7'),
        coords['F7'] = new Pawn('black', this, 'F7'),
        coords['G7'] = new Pawn('black', this, 'G7'),
        coords['H7'] = new Pawn('black', this, 'H7'),
        coords['A8'] = new Rook('black', this, 'A8'),
        coords['B8'] = new Horse('black', this, 'B8'),
        coords['C8'] = new Bishop('black', this, 'C8'),
        coords['D8'] = new Queen('black', this, 'D8'),
        coords['E8'] = new King('black', this, 'E8'),
        coords['F8'] = new Bishop('black', this, 'F8'),
        coords['G8'] = new Horse('black', this, 'G8'),
        coords['H8'] = new Rook('black', this, 'H8')

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

console.log((new Game).desk.coords['A2'].moves())