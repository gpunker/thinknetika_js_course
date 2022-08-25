import Desk from "../desk"
import Figure from "./figure"

export default class King extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        const coords = []
        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])

        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (x === 0 && y === 0) continue

                let c = `${Desk.x[cellX + x]}${Desk.y[cellY + y]}`

                if (
                    this.desk.coords[c] === null || 
                    this.desk.coords[c] && this.desk.coords[c].color !== this.color
                ) {
                    coords.push(c)
                }
            }
        }

        return coords
    }
}