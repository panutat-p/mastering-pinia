<script lang="ts">
import { computed, effectScope, ref } from 'vue'

import type { EffectScope } from 'vue'

let effect: EffectScope
let n: any
let double: any

/**
 * useEffectStore is a solid way to create a store.
 * singleton effect: ensure that only one effect is created when reuse this store in many components
 */
export function useEffectStore() {
  if (!effect) {
    effect = effectScope(true)
    n = effect.run(() => ref(0))
    double = effect.run(() => computed(() => n.value * 2))
  }
  return { n, double }
}
</script>

<script setup lang="ts">
const { n, double } = useEffectStore()
</script>

<template>
  <h1 class="text-4xl mb-10">Part 3</h1>
  <h2 class="text-2xl mb-10">Effect Scope Store</h2>
  <button v-on:click="n++" class="btn btn-primary mb-5">Increment</button>
  <p class="text-2xl mb-5">{{ n }}</p>
  <p class="text-2xl mb-5">{{ double }}</p>
</template>
