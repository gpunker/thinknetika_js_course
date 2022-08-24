export default class HistoryView {
    _historyContainer = document.querySelector('#history')

    constructor() {}

    add(from, to) {
        let moveElement = document.createElement('div')
        moveElement.classList.add('history-move')
        moveElement.textContent = `${from}:${to}`
        this._historyContainer.append(moveElement)
    }
}