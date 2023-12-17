<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex flex-row items-center p-6 bg-teal-500">
      <div class="text-white mr-12">
        <span class="font-semibold text-3xl tracking-tight">Vue</span>
      </div>
      <div class="text-sm">
        <RouterLink v-bind:to="{ name: `Product` }" class="text-white text-xl font-bold hover:text-amber-200 mr-6"
          >Products</RouterLink
        >
        <RouterLink v-bind:to="{ name: `Part1` }" class="text-white text-xl font-bold hover:text-amber-200 mr-6"
          >Part1</RouterLink
        >
        <RouterLink v-bind:to="{ name: `Part2` }" class="text-white text-xl font-bold hover:text-amber-200 mr-6"
          >Part2</RouterLink
        >
        <RouterLink v-bind:to="{ name: `Part3` }" class="text-white text-xl font-bold hover:text-amber-200 mr-6"
          >Part3</RouterLink
        >
      </div>
    </nav>
  </header>
  <main class="h-screen overflow-auto bg-stone-200">
    <section class="container mx-auto pt-5">
      <RouterView />
    </section>
  </main>
</template>
