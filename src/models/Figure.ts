import type { Cell } from './Cell'
import type { Colors } from './Colors'
import icon from '@/assets/imgs/pieces/black-king.png'

export enum FigureNames {
  FIGURE = 'Фигура',
  BISHOP = 'Слон',
  KING = 'Король',
  KNIGHT = 'Конь',
  PAWN = 'Пешка',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья'
}

export class Figure {
  color: Colors
  icon: typeof icon | null
  cell: Cell
  name: FigureNames
  id: number

  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.icon = null
    this.name = FigureNames.FIGURE
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) {
      return false
    }
    if (target.figure?.name === FigureNames.KING) {
      return false
    }
    return true
  }
  moveFigure(target: Cell) {}
}
