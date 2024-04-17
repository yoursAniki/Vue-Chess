<script setup lang="ts">
import { onMounted, ref } from 'vue'
import BoardComponent from '@/components/BoardComponent.vue'
import { Board } from '/src/models/Board.ts'

const board = ref<Board | null>(null)

onMounted(() => {
  restart()
})

const restart = () => {
  const newBoard = new Board()
  newBoard.initCells()
  newBoard.addFigures()
  board.value = newBoard
}
</script>

<template>
  <div class="app">
    <BoardComponent :board="board" />
  </div>
</template>

<style scoped></style>
