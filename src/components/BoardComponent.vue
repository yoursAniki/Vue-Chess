<template>
  <div v-if="props.board !== null" class="board">
    <div v-for="row in props.board.cells" :key="row[0].id">
      <CellComponent
        v-for="cell in row"
        :key="cell.id"
        class="cell"
        :cell="cell"
        :selected="cell.x === selectedCell?.x && cell.y === selectedCell?.y"
        :click="click"
      >
      </CellComponent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { Board } from '/src/models/Board.ts'
import CellComponent from './CellComponent.vue'
import { Cell } from '@/models/Cell'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const props: BoardProps = defineProps<BoardProps>()

const selectedCell = ref<Cell | null>(null)

const setSelectedCell = (cell: Cell | null) => {
  selectedCell.value = cell
}

function click(cell: Cell) {
  if (
    selectedCell.value &&
    selectedCell.value !== cell &&
    selectedCell.value?.figure?.canMove(cell)
  ) {
    selectedCell.value.moveFigure(cell)
    setSelectedCell(null)
  } else {
    setSelectedCell(cell)
  }
}

function highlightCells() {
  props.board.highlightCells(selectedCell.value)
  updateBoard()
}

watch(selectedCell, () => {
  highlightCells()
})

function updateBoard() {
  const newBoard = props.board.getCopyBoard()
  props.setBoard(newBoard)
}
</script>

<style scoped></style>
