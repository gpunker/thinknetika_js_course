import { COLORS } from "../chess_engine/constants/colors"
import Game from "../chess_engine/game"
import DeskView from "./desk_view"
import HistoryView from "./history_view"
import KilledFiguresView from "./killed_figures_view"

export default class GameView {
    /** @type { HTMLElement } */
    _loginForm = document.querySelector('#login')
    /** @type { HTMLElement } */
    _turnLabel = document.querySelector('#turn')

    _player1 = null
    _player2 = null
    
    /** @type { Game } */
    _gameEngine = null
    
    /** @type { DeskView } */
    _deskView = null

    /** @type { HistoryView } */
    _historyView = null

    /** @type { KilledFiguresView } */
    _killedFiguresView = null

    constructor() {
        this._loginForm.addEventListener('submit', (e) => this._register(e))
    }

    /**
     * @param { Event } e 
     */
    _register(e) {
        e.preventDefault()
        this._player1 = e.target.querySelector('#login_player1').value
        this._player2 = e.target.querySelector('#login_player2').value
        this._startGame()
    }

    _startGame() {
        this._loginForm.hidden = true
        this._gameEngine = new Game()
        this._deskView = new DeskView(this, this._gameEngine)
        this._historyView = new HistoryView()
        this._killedFiguresView = new KilledFiguresView()
    }

    update() {
        this._updateTurn()
        this._updateHistory()
    }

    _updateTurn() {
        if (this._gameEngine.turn === COLORS.WHITE) {
            this._turnLabel.textContent = 'Ход белых'
        } else {
            this._turnLabel.textContent = 'Ход черных'
        }
    }

    _updateHistory() {
        this._historyView.fill(this._gameEngine.history)
    }
}