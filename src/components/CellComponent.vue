<template>
  <div class="cell" :class="props.cell.color">
    
  </div>
</template>

<script lang="ts" setup>
import { Cell } from '@/models/Cell';

interface CellProps {
  cell: Cell
}

const props: CellProps = defineProps<CellProps>()
</script>