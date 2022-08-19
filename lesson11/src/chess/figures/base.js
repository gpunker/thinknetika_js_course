export default class BaseFigure {
    constructor(color, desk, cell) {
        this._color = color
        this._desk = desk
        this._cell = cell
    }

    _color = null
    _desk = null
    _cell = null

    get color() { return this._color }
    get desk() { return this._desk }
    get cell() { return this._cell }

    moves() {
        throw Error('Function `moves` is not implemented')
    }
}