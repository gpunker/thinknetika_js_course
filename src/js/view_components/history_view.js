export default class HistoryView {
    _historyContainer = document.querySelector('#history')

    constructor() {}

    addMove(from, to) {
        let moveElement = document.createElement('div', { class: "history-move" })
        moveElement.textContent = `${from}:${to}`
        this._historyContainer.appendChild(moveElement)
    }
}