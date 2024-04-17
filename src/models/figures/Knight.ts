import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from '../Figure'

import blackIcon from '@/assets/imgs/pieces/black-knight.png'
import whiteIcon from '@/assets/imgs/pieces/white-knight.png'

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)

    this.icon = color === Colors.WHITE ? whiteIcon : blackIcon
    this.name = FigureNames.KNIGHT
  }
}
