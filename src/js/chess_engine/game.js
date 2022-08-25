import Desk from "./desk";
import { STATES } from "./constants/states"
import { COLORS } from "./constants/colors"

export default class Game {
    constructor() {}
    
    _state = Game.states[0]
    _desk = new Desk()
    _turn = COLORS.WHITE
    _history = []
    _killedFigures = []

    static get states() { return Object.keys(STATES).map((key) => STATES[key]) }

    get desk() { return this._desk }
    get turn() { return this._turn }
    get history() { return this._history }
    get killedFigures() { return this._killedFigures }
    get state() { return this._state }

    selectFigure(coord) {
        return this._desk._coords[coord]
    }

    move(from, to) {
        let killed = this._desk.move(from, to)
        this._history.push(`${from}:${to}`)
        this._changeTurn()
        if (killed) this._killedFigures.push(killed)
    }

    _changeTurn() {
        if (this._turn === COLORS.WHITE) {
            this._turn = COLORS.BLACK
        } else {
            this._turn = COLORS.WHITE
        }
    }
}