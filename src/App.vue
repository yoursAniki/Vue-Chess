<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BoardComponent from '@/components/BoardComponent.vue'
import { Board } from '/src/models/Board.ts'

const board = ref<Board | null>(null)

function setBoard(newBoard: Board) {
  board.value = newBoard
}

onMounted(() => {
  restart()
})

const restart = () => {
  const newBoard = new Board()
  newBoard.initCells()
  newBoard.addFigures()
  setBoard(newBoard)
}
</script>

<template>
  <div class="app">
    <BoardComponent :board="board" :set-board="setBoard" />
  </div>
</template>

<style scoped></style>
