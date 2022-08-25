import Desk from "../desk"
import Figure from "./figure"
import { COLORS } from "../constants/colors"

export default class Pawn extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    _doubleMove = true
    _canEvolve = false

    get canEvolve() { return this._canEvolve } 

    moves() {
        const coords = []
        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])

        for (let y = -2; y <= 2; y++) {
            let cY = `${Desk.x[cellX]}${Desk.y[cellY + y]}`
            let cXLeft = `${Desk.x[cellX - 1]}${Desk.y[cellY + y]}`
            let cXRight = `${Desk.x[cellX + 1]}${Desk.y[cellY + y]}`
            
            if (
                //условия для белых
                (this.color === COLORS.WHITE && (y === 1 || (y === 2 && this._doubleMove))) 
                || 
                //условия для черных
                (this.color === COLORS.BLACK && (y === -1 || (y === -2 && this._doubleMove)))
            ) {
                coords.push(cY)
                
                // возможность рубить по диагонали
                if ([-1, 1].includes(y)) {
                    if (this.desk.coords[cXRight] && this.desk.coords[cXRight].color != this.color) coords.push(cXRight) 
                    if (this.desk.coords[cXLeft] && this.desk.coords[cXLeft].color != this.color) coords.push(cXLeft) 
                }
            }
        }

        return coords
    }
}