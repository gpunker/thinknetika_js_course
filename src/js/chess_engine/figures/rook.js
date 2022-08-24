import Desk from "../desk"
import Figure from "./figure"

export default class Rook extends Figure {
    constructor(color, desk, cell) {
        super(color, desk, cell)
    }

    moves() {
        const coords = []
        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])

        // посчитаем ходы по Y
        //верх
        for(let i = cellY+1; i < Desk.y.length; i++) {
            let c = `${Desk.x[cellX]}${Desk.y[i]}`
            if (this.desk.coords[c] == null) {
                coords.push(c)
            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {
                coords.push(c)
                break
            } else {
                break
            }
        }

        //вниз
        for(let i = cellY-1; i >= 0; i--) {
            let c = `${Desk.x[cellX]}${Desk.y[i]}`
            if (this.desk.coords[c] == null) {
                coords.push(c)
            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {
                coords.push(c)
                break
            } else {
                break
            }
        }

        // посчитаем ходы по X
        // вправо
        for(let i = cellX+1; i < Desk.x.length; i++) {
            let c = `${Desk.x[i]}${Desk.y[cellY]}`
            if (this.desk.coords[c] == null) {
                coords.push(c)
            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {
                coords.push(c)
                break
            } else {
                break
            }
        }

        // влево
        for(let i = cellX-1; i >= 0; i--) {
            let c = `${Desk.x[i]}${Desk.y[cellY]}`
            if (this.desk.coords[c] == null) {
                coords.push(c)
            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {
                coords.push(c)
                break
            } else {
                break
            }
        }

        return coords
    }
}