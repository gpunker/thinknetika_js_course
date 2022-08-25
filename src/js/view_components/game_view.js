import Game from "../chess_engine/game"
import DeskView from "./desk_view"

export default class GameView {
    /** @type HTMLElement */
    _loginForm = document.querySelector('#login')
    _player1 = null
    _player2 = null
    /** @type Game */
    _gameEngine = null
    _deskView = null
    
    constructor() {
        this._loginForm.addEventListener('submit', (e) => this._register(e))
    }

    /**
     * @param {Event} e 
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
        this._deskView = new DeskView(this._gameEngine)
    }
}