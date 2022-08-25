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
    _turnCount = 0

    static get states() { return Object.keys(STATES).map((key) => STATES[key]) }

    get desk() { return this._desk }
    get turn() { return this._turn }
    get history() { return this._history }
    get killedFigures() { return this._killedFigures }
    get turnCount() { return this._turnCount }
    get state() { return this._state }

    selectFigure(coord) {
        return this._desk._coords[coord]
    }

    move(from, to) {
        let killed = this._desk.move(from, to)
        
        if (killed) this._killedFigures.push(killed)
    }
}