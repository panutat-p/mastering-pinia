```vue
<script setup lang="ts">
import Hamburger from '@/components/Hamburger.vue'
import Meatballs from '@/components/Meatballs.vue'
</script>

<template>
  <nav class="navbar bg-base-100 fixed z-50">
    <div class="flex-none">
      <Hamburger />
    </div>
    <div class="">
      <router-link v-bind:to="{ name: `Home` }" class="btn btn-ghost normal-case text-xl">Home</router-link>
    </div>
    <div class="">
      <router-link v-bind:to="{ name: `About` }" class="btn btn-ghost normal-case text-xl">About</router-link>
    </div>
    <div class="flex-none">
      <Meatballs />
    </div>
  </nav>
  <div class="h-16"></div>
  <main class="lg:container lg:mx-auto md:max-w-md">
    <router-view />
  </main>
</template>
```
