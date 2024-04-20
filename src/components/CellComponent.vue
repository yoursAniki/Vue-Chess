<template>
  <div
    @click="click(cell)"
    class="cell"
    :class="[props.cell.color, { selected: props.selected }]"
    :style="{ background: cell.available && cell.figure ? '#7B61FF' : '' }"
  >
    <div v-if="!cell.figure && cell.available" class="available"></div>
    <img v-if="props.cell.figure" :src="props.cell.figure.icon" alt="" />
  </div>
</template>

<script lang="ts" setup>
import { Cell } from '@/models/Cell'

interface CellProps {
  cell: Cell
  selected: Boolean
  click: (cell: Cell) => void
}

const props: CellProps = defineProps<CellProps>()
</script>
