import type { Board } from './Board'
import type { Colors } from './Colors'
import type { Figure } from './Figure'

export class Cell {
  readonly x: number
  readonly y: number
  readonly color: Colors
  figure: Figure | null
  board: Board
  available: boolean
  id: number

  constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
    this.x = x
    this.y = y
    this.board = board
    this.color = color
    this.figure = figure
    this.available = false
    this.id = Math.random()
  }

  isEmpty() {
    return this.figure !== null
  }

  isEmptyVertical(target: Cell): boolean {
    if (this.y !== target.y) {
      return false
    }

    const min = Math.min(this.x, target.x)
    const max = Math.max(this.x, target.x)

    for (let x = min + 1; x < max; x++) {
      if (!this.board.getCell(x, this.y).isEmpty()) {
        return false
      }
    }
    return true
  }

  setFigure(figure: Figure) {
    console.log(this.x, this.y)
    this.figure = figure
    this.figure.cell = this
  }

  moveFigure(target: Cell) {
    if (this.figure && this.figure?.canMove(target)) {
      this.figure.moveFigure(target)
      target.setFigure(this.figure)
      this.figure = null
    }
  }
}
