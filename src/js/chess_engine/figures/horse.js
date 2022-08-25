import { COLORS } from "../constants/colors"
import Desk from "../desk"
import Figure from "./figure"

export default class Horse extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        const coords = []
        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])

        // ходы вверх
        for (let i = -2; i <= 2; i++) {
            for (let j = -2; j <= 2; j++) {
                if (
                    (([-1, 1].includes(i)) && ([-2, 2].includes(j))) ||
                    (([-2, 2].includes(i)) && ([-1,1].includes(j)))
                ) {
                    let c = `${Desk.x[cellX + i]}${Desk.y[cellY + j]}`
                    
                    if (
                        this.desk.coords[c] === null ||
                        (this.desk.coords[c] && this.desk.coords[c].color != this.color)
                    ) {
                        coords.push(c)
                    }

                }
            }
        }




        // for (let i = 0; i < ms.length; i++) {
        //     newX = Desk.x[cellX + ms[i][0]]
        //     newY = Desk.y[cellY + ms[i][1]]

        //     const coordsIndex = `${newX}${newY}`

        //     if (this.desk.coords[coordsIndex] === null || 
        //         (this.desk.coords[coordsIndex] && this.desk.coords[coordsIndex].color !== this.color)
        //     ) {
        //         coords.push(coordsIndex)
        //     }
        // }

        return coords
    }
}