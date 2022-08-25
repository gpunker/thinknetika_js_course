import Figure from "./figure"

export default class Queen extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return this.movesX().concat(this.movesY()).concat(this.movesXY())
    }

    type() {
        return 'queen'
    }
}