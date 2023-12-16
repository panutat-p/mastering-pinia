<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex flex-row items-center p-6 bg-teal-500">
      <div class="text-white mr-10">
        <span class="font-semibold text-xl tracking-tight">Vue</span>
      </div>
      <div class="text-sm">
        <RouterLink v-bind:to="{ name: `Home` }" class="text-white hover:text-amber-200 mr-4">Home</RouterLink>
        <RouterLink v-bind:to="{ name: `About` }" class="text-white hover:text-amber-200 mr-4">About</RouterLink>
      </div>
    </nav>
  </header>
  <RouterView />
</template>
