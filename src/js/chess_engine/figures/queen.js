import Figure from "./base"

export default class Queen extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return 'Ходы для ферзя'
    }
}