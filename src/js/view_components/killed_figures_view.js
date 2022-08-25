import { COLORS } from "../chess_engine/constants/colors";
import Figure from "../chess_engine/figures/figure";

export default class KilledFiguresView {
    _killedWhitesContainer = document.querySelector('#killed-whites')
    _killedBlacksContainer = document.querySelector('#killed-blacks')

    constructor() {}

    /**
     * @param { Array<Figure> } figures 
     */
    fill(figures) {
        this._killedBlacksContainer.textContent = ''
        this._killedWhitesContainer.textContent = ''

        figures.forEach(figure => {
            let element = document.createElement('div')
            element.classList.add('figure-killed', `${figure.type()}-killed`, `${figure.color}`)

            switch(figure.color) {
                case COLORS.WHITE:
                    this._killedWhitesContainer.appendChild(element)
                    break
                case COLORS.BLACK:
                    this._killedBlacksContainer.appendChild(element)
            }
        });
    }
}