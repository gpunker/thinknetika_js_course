// фигуры
class BaseFigure {
    constructor(color, desk, cell) {
        this._color = color
        this._desk = desk
        this._cell = cell
    }

    _color = null
    _desk = null
    _cell = null

    get color() { return this._color }
    get desk() { return this._desk }
    get cell() { return this._cell }

    moves() {
        throw Error('Function `moves` is not implemented')
    }
}

class Pawn extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    _doubleMove = true
    _canEvolve = false

    get canEvolve() { return this._canEvolve } 

    moves() {
        return 'Ходы для пешки'
    }
}

class Horse extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return 'Ходы для коня'
    }
}

class Bishop extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return 'Ходы для слона'
    }
}

class Rook extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return 'Ходы для ладьи'
    }
}

class Queen extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return 'Ходы для ферзя'
    }
}

class King extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return 'Ходы для короля'
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
        coords['A1'] = new Rook('white', this, 'A1')
        coords['B1'] = new Horse('white', this, 'B1')
        coords['C1'] = new Bishop('white', this, 'C1')
        coords['D1'] = new Queen('white', this, 'D1')
        coords['E1'] = new King('white', this, 'E1')
        coords['F1'] = new Bishop('white', this, 'F1')
        coords['G1'] = new Horse('white', this, 'G1')
        coords['H1'] = new Rook('white', this, 'H1')

        for (let i = 0; i < Desk.x.length; i++) {
            coords[`${Desk.x[i]}2`] = new Pawn('white', this, `${Desk.x[i]}2`)
        }
        
        // черные
        for (let i = 0; i < Desk.x.length; i++) {
            coords[`${Desk.x[i]}7`] = new Pawn('white', this, `${Desk.x[i]}7`)
        }
        coords['A8'] = new Rook('black', this, 'A8'),
        coords['B8'] = new Horse('black', this, 'B8'),
        coords['C8'] = new Bishop('black', this, 'C8'),
        coords['D8'] = new Queen('black', this, 'D8'),
        coords['E8'] = new King('black', this, 'E8'),
        coords['F8'] = new Bishop('black', this, 'F8'),
        coords['G8'] = new Horse('black', this, 'G8'),
        coords['H8'] = new Rook('black', this, 'H8')

        this._coords = coords
    }

    _coords = {}

    static get y() { return [1, 2, 3, 4, 5, 6, 7, 8] }
    static get x() { return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] }

    get coords() { return this._coords }
}

// игра
class Game {
    constructor() {}
    
    _state = Game.states[0]
    _desk = new Desk()
    _turn = 'white'
    _history = []
    _killedFigures = []
    _turnCount = 0

    static get states() { return ['continue', 'white wins', 'black wins'] }

    get desk() { return this._desk }
    get turn() { return this._turn }
    get history() { return this._history }
    get killedFigures() { return this._killedFigures }
    get turnCount() { return this._turnCount }
    get state() { return this._state }
}

let game = new Game()
let desk = game.desk
console.log(desk.coords['A1'].color)
