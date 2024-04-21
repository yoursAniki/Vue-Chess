import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from '../Figure'

import blackIcon from '@/assets/imgs/pieces/black-bishop.png'
import whiteIcon from '@/assets/imgs/pieces/white-bishop.png'

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)

    this.icon = color === Colors.WHITE ? whiteIcon : blackIcon
    this.name = FigureNames.BISHOP
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false
    }
    return true
  }
}
