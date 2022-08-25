import Desk from "../desk"

export default class Figure {
    constructor(color, desk, cell) {
        this._color = color
        this._desk = desk
        this._cell = cell
    }

    _color = null
    _desk = null
    _cell = null

    get color() { return this._color }
    get desk() { return this._desk }
    get cell() { return this._cell }

    moves() {
        throw Error('Function `moves` is not implemented')
    }

    movesY() {
        const coords = []
        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])

        // посчитаем ходы по Y
        //верх
        for(let i = cellY + 1; i < Desk.y.length; i++) {
            let c = `${Desk.x[cellX]}${Desk.y[i]}`
            if (this.desk.coords[c] === null) {
                coords.push(c)
            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {
                coords.push(c)
                break
            } else {
                break
            }
        }

        //вниз
        for(let i = cellY - 1; i >= 0; i--) {
            let c = `${Desk.x[cellX]}${Desk.y[i]}`
            if (this.desk.coords[c] === null) {
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

    movesX() {
        const coords = []
        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])

        // посчитаем ходы по X
        // вправо
        for(let i = cellX + 1; i < Desk.x.length; i++) {
            let c = `${Desk.x[i]}${Desk.y[cellY]}`
            if (this.desk.coords[c] === null) {
                coords.push(c)
            } else if (this.desk.coords[c] && this.desk.coords[c].color !== this.color) {
                coords.push(c)
                break
            } else {
                break
            }
        }

        // влево
        for(let i = cellX - 1; i >= 0; i--) {
            let c = `${Desk.x[i]}${Desk.y[cellY]}`
            if (this.desk.coords[c] === null) {
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

    movesXY() {
        const coords = []
        const cellX = Desk.x.indexOf(this.cell[0])
        const cellY = Desk.y.indexOf(this.cell[1])
        let canLeft = true;
        let canRight = true;

        // диагональ вверх
        for (let i = cellY + 1, j = 1; i < Desk.y.length; i++, j++) {
            let cLeft = `${Desk.x[cellX - j]}${Desk.y[i]}`
            let cRight = `${Desk.x[cellX + j]}${Desk.y[i]}`

            if (canLeft) {
                if (this.desk.coords[cLeft] === null) {
                    coords.push(`${Desk.x[cellX - j]}${Desk.y[i]}`)
                } else if (this.desk.coords[cLeft] && this.desk.coords[cLeft].color !== this.color) {
                    coords.push(`${Desk.x[cellX - j]}${Desk.y[i]}`)
                    canLeft = false
                } else {
                    canLeft = false
                }
            }

            if (canRight) {
                if (this.desk.coords[cRight] === null) {
                    coords.push(`${Desk.x[cellX + j]}${Desk.y[i]}`)
                } else if (this.desk.coords[cRight] && this.desk.coords[cRight].color !== this.color) {
                    coords.push(`${Desk.x[cellX + j]}${Desk.y[i]}`)
                    canRight = false
                } else {
                    canRight = false
                }
            }
        }

        // диагональ вниз
        canLeft = true;
        canRight = true;

        for (let i = cellY - 1, j = 1; i >= 0; i--, j++) {
            let cLeft = `${Desk.x[cellX - j]}${Desk.y[i]}`
            let cRight = `${Desk.x[cellX + j]}${Desk.y[i]}`

            if (canLeft) {
                if (this.desk.coords[cLeft] === null) {
                    coords.push(`${Desk.x[cellX - j]}${Desk.y[i]}`)
                } else if (this.desk.coords[cLeft] && this.desk.coords[cLeft].color !== this.color) {
                    coords.push(`${Desk.x[cellX - j]}${Desk.y[i]}`)
                    canLeft = false
                } else {
                    canLeft = false
                }
            }

            if (canRight) {
                if (this.desk.coords[cRight] === null) {
                    coords.push(`${Desk.x[cellX + j]}${Desk.y[i]}`)
                } else if (this.desk.coords[cRight] && this.desk.coords[cRight].color !== this.color) {
                    coords.push(`${Desk.x[cellX + j]}${Desk.y[i]}`)
                    canRight = false
                } else {
                    canRight = false
                }
            }
        }

        return coords
    }
}