import Desk from "../desk"
import Figure from "./figure"

export default class Pawn extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    _doubleMove = true
    _canEvolve = false

    get canEvolve() { return this._canEvolve } 

    moves() {
        const coords = []

        const ms = [[0,1], [-1, 1], [1,1]]
        if (this._doubleMove) ms.push([0,2])

        let cellX = Desk.x.indexOf(this.cell[0])
        let cellY = Desk.y.indexOf(this.cell[1])

        for (let i = 0; i < ms.length; i++) {
            let newX = Desk.x[cellX + ms[i][0]]
            let newY = Desk.y[cellY + ms[i][1]]

            let coordsIndex = `${newX}${newY}`

            if (this.desk.coords[coordsIndex] !== undefined) {
                console.log(ms[i][0], this.desk.coords[coordsIndex] === null)
                // в теории сюда можно запихать блок для доп обработки
                if (ms[i][0] !== 0 && this.desk.coords[coordsIndex] === null) {
                    continue
                }
                coords.push(coordsIndex)
            }
        }

        return coords
    }
}