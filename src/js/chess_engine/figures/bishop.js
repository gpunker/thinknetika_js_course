import Figure from "./figure"

export default class Bishop extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return 'Ходы для слона'
    }
}