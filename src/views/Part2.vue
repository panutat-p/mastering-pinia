<script lang="ts">
import { computed, ref } from 'vue'

let store: any

const n = ref(0)

const double = computed(() => n.value * 2)

function increment() {
  n.value++
}

store = { n, double, increment }

/**
 * useWeirdStore is OK because:
 * 1. No need to init in the App.vue
 * 2. JS GC will not destroy this store.
 */
export function useWeirdStore() {
  return store
}
</script>

<script setup lang="ts">
const { n, double, increment } = useWeirdStore()
</script>

<template>
  <h1 class="text-4xl mb-10">Part 2</h1>
  <h2 class="text-2xl mb-10">Weird Store</h2>
  <button v-on:click="increment" class="btn btn-primary mb-5">Increment</button>
  <p class="text-2xl mb-5">{{ n }}</p>
  <p class="text-2xl mb-5">{{ double }}</p>
</template>
