import { COLORS } from "../constants/colors"
import Desk from "../desk"
import Figure from "./figure"

export default class Horse extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        const coords = []

        const ms = [
            [2, -1],
            [2, 1],
            [1, -2],
            [1, 2],
            [-2, -1],
            [-2, 1],
            [-1, -2],
            [-1, 2],
        ]

        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])
        let newX = null
        let newY = null

        for (let i = 0; i < ms.length; i++) {
            newX = Desk.x[cellX + ms[i][0]]
            newY = Desk.y[cellY + ms[i][1]]

            const coordsIndex = `${newX}${newY}`

            if (this.desk.coords[coordsIndex] === null || 
                (this.desk.coords[coordsIndex] && this.desk.coords[coordsIndex].color !== this.color)
            ) {
                coords.push(coordsIndex)
            }
        }

        return coords
    }
}