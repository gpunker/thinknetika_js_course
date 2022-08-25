import { Pawn, Horse, Bishop, Rook, Queen, King } from './figures'
import { COLORS } from "./constants/colors"

export default class Desk {
    constructor() {
        // генерируем координаты
        let coords = {}

        Desk.x.forEach(function(x) {
            return Desk.y.forEach(function(y) {
                return coords[`${x}${y}`] = null
            })
        })

        // генерируем фигуры на доске
        // белые
        coords['A1'] = new Rook(COLORS.WHITE, this, 'A1')
        coords['B1'] = new Horse(COLORS.WHITE, this, 'B1')
        coords['C1'] = new Bishop(COLORS.WHITE, this, 'C1')
        coords['D1'] = new Queen(COLORS.WHITE, this, 'D1')
        coords['E1'] = new King(COLORS.WHITE, this, 'E1')
        coords['F1'] = new Bishop(COLORS.WHITE, this, 'F1')
        coords['G1'] = new Horse(COLORS.WHITE, this, 'G1')
        coords['H1'] = new Rook(COLORS.WHITE, this, 'H1')

        // белые
        for (let i = 0; i < Desk.x.length; i++) {
            coords[`${Desk.x[i]}2`] = new Pawn(COLORS.WHITE, this, `${Desk.x[i]}2`)
        }
        
        // черные
        for (let i = 0; i < Desk.x.length; i++) {
            coords[`${Desk.x[i]}7`] = new Pawn(COLORS.BLACK, this, `${Desk.x[i]}7`)
        }
        coords['A8'] = new Rook(COLORS.BLACK, this, 'A8'),
        coords['B8'] = new Horse(COLORS.BLACK, this, 'B8'),
        coords['C8'] = new Bishop(COLORS.BLACK, this, 'C8'),
        coords['D8'] = new Queen(COLORS.BLACK, this, 'D8'),
        coords['E8'] = new King(COLORS.BLACK, this, 'E8'),
        coords['F8'] = new Bishop(COLORS.BLACK, this, 'F8'),
        coords['G8'] = new Horse(COLORS.BLACK, this, 'G8'),
        coords['H8'] = new Rook(COLORS.BLACK, this, 'H8')

        this._coords = coords
    }

    _coords = {}

    static get y() { return ['1', '2', '3', '4', '5', '6', '7', '8'] }
    static get x() { return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] }

    get coords() { return this._coords }

    canMove(from, to) {
        return this._coords[from].moves().includes(to)
    }
}