import Figure from "./base"

export default class Rook extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return 'Ходы для ладьи'
    }
}