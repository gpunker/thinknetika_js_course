import BaseFigure from "./base"

export default class Bishop extends BaseFigure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        return 'Ходы для слона'
    }
}