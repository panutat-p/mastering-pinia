<script lang="ts">
import { computed, ref } from 'vue'

let store

export function useBadStore() {
  if (!store) {
    const n = ref(0)
    const double = computed(() => n.value * 2)

    function increment() {
      n.value++
    }

    store = { n, double, increment }
  }

  return store
}
</script>

<script setup lang="ts">
const { n, double, increment } = useBadStore()
</script>

<template>
  <h1 class="text-4xl mb-10">Part 1</h1>
  <h2 class="text-2xl mb-10">Bad Store</h2>
  <button v-on:click="increment" class="btn btn-primary mb-5">Increment</button>
  <p class="text-2xl mb-5">{{ n }}</p>
  <p class="text-2xl mb-5">{{ double }}</p>
</template>
