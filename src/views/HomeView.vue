<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import SquareSpinner from '@/components/SquareSpinner.vue'

const counter = useCounterStore()
</script>

<template>
  <h1 class="text-4xl mb-10">home</h1>
  <button v-on:click="counter.increment" class="btn mb-10">
    Increment
    <div class="badge badge-secondary">{{ counter.count }}</div>
  </button>
  <SquareSpinner class="mb-10" />
  <img src="https://placehold.co/768x50/857979/FFF" alt="simple placeholder" />
  <img src="https://placehold.co/1024x50/696362/FFF" alt="simple placeholder" />
  <img src="https://placehold.co/1280x50/363232/FFF" alt="simple placeholder" />
</template>
