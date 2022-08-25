export default class HistoryView {
    _historyContainer = document.querySelector('#history')

    constructor() {}

    /**
     * @param { Array<String> } moves 
     */
    fill(moves) {
        this._historyContainer.textContent = ''

        moves.forEach(move => {
            let moveElement = document.createElement('div')
            moveElement.classList.add('history-move')
            moveElement.textContent = move
            this._historyContainer.append(moveElement)
        })
        
    }
}