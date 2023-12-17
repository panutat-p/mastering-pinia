<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import SquareSpinner from '@/components/SquareSpinner.vue'

const counter = useCounterStore()
</script>

<template>
  <h1 class="text-4xl mb-10">home</h1>
  <div class="card w-5/12 bg-base-100 shadow-xl mb-10">
    <figure>
      <img src="@/assets/logo.svg" alt="Vue logo" class="m-10 w-32" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        Vue
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p>Composition APIs</p>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Vue3</div>
        <div class="badge badge-outline">Vite</div>
        <div class="badge badge-outline">TypeScript</div>
        <div class="badge badge-outline">Tailwind</div>
        <div class="badge badge-outline">DaisyUI</div>
      </div>
    </div>
  </div>
  <button v-on:click="counter.increment" class="btn mb-10">
    Increment
    <div class="badge badge-secondary">{{ counter.count }}</div>
  </button>
  <SquareSpinner class="mb-10" />
  <img src="https://placehold.co/768x50/857979/FFF" alt="simple placeholder" />
  <img src="https://placehold.co/1024x50/696362/FFF" alt="simple placeholder" />
  <img src="https://placehold.co/1280x50/363232/FFF" alt="simple placeholder" />
</template>
