<template>
  <div v-if="props.board !== null" class="board">
    <div v-for="row in props.board.cells" :key="row[0].id">
      <CellComponent v-for="cell in row" :key="cell.id" class="cell" :cell="cell"> </CellComponent>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Board } from '/src/models/Board.ts'
import CellComponent from './CellComponent.vue'

interface BoardProps {
  board: Board
}

const props: BoardProps = defineProps<BoardProps>()
</script>

<style scoped></style>
