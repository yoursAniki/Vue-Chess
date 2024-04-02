<template>
  <div v-if="props.board !== null" class="board">
    <div v-for="row in props.board.cells" :key="row[0].id">
      <div
        v-for="cell in row"
        :key="cell.id"
        class="cell"
        :class="cell.color"
      >
        {{ cell.value }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Board } from '/src/models/Board.ts'

interface BoardProps {
  board: Board
  // setBoard: (board: Board) => void
}

const props: BoardProps = defineProps<BoardProps>()
</script>

<style scoped></style>
