import Desk from "../desk"
import Figure from "./figure"

export default class Bishop extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return this.movesXY()
    }

    type() {
        return 'bishop'
    }
}