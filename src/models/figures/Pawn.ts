import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from '../Figure'

import blackIcon from '@/assets/imgs/pieces/black-pawn.png'
import whiteIcon from '@/assets/imgs/pieces/white-pawn.png'

export class Pawn extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)

    this.icon = color === Colors.WHITE ? whiteIcon : blackIcon
    this.name = FigureNames.PAWN
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}
