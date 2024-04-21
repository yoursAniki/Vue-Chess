import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from '../Figure'

import blackIcon from '@/assets/imgs/pieces/black-queen.png'
import whiteIcon from '@/assets/imgs/pieces/white-queen.png'

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)

    this.icon = color === Colors.WHITE ? whiteIcon : blackIcon
    this.name = FigureNames.QUEEN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    if (this.cell.isEmptyVertical(target)) {
      return true
    }
    return false
  }
}
