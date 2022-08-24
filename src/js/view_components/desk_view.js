export default class DeskView {
    _desk = document.querySelector('#desk')
    _cells = this._desk.querySelectorAll('.cell')
    _isFigureSelected = false

    constructor() {
        this._cells.forEach(cell => cell.addEventListener('click', (e) => this.move(e)))
    }

    // Возможно надо переименовать метод
    move(e) {
        let figure = e.target

        if (this._isFigureSelected) {
            this._cells.forEach(cell => cell.classList.remove('available'))
            document.querySelectorAll('.figure').forEach(elem => elem.classList.remove('selected'))
            this._isFigureSelected = false
        } else {
            if (figure.className.includes('figure')) {
                // запрашиваем из движка достыпные ходы для фигуры
                let availableMoves = ['F3', 'H3']
    
                let availableCells = Array.prototype.slice.call(this._cells).filter(cell => availableMoves.includes(cell.id))
    
                figure.classList.add('selected')
                availableCells.forEach(cell => cell.classList.add('available'))
            }

            this._isFigureSelected = true
        }
    }
}