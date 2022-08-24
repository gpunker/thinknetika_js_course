import Desk from "../desk"
import Figure from "./figure"

export default class Rook extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return this.movesX().concat(this.movesY())
    }
}