<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import SquareSpinner from '@/components/SquareSpinner.vue'

const counter = useCounterStore
</script>

<template>
  <h1 class="text-4xl mt-5 mb-10">home</h1>
  <SquareSpinner />
</template>
