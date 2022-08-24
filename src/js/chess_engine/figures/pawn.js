import Figure from "./base"

export default class Pawn extends Figure {
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