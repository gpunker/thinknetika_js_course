import Figure from "./base"

export default class King extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return 'Ходы для короля'
    }
}