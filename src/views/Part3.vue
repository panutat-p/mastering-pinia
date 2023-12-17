<script setup lang="ts">
import { useBasicStore } from '@/stores/basic'

const { double, n } = useBasicStore()
</script>

<template>
  <h1 class="text-4xl mb-10">Part 3</h1>
  <h2 class="text-2xl mb-10">Custom Store</h2>
  <button v-on:click="n++" class="btn btn-primary mb-5">Increment</button>
  <p class="text-2xl mb-5">{{ n }}</p>
  <p class="text-2xl mb-5">{{ double }}</p>
</template>
