<script setup lang="ts">
import { useJsonStore } from '@/stores/json'

const json = useJsonStore()
</script>

<template>
  <h1 class="text-4xl mb-10">products</h1>
  <div class="mb-10">
    <button v-on:click="json.fetchTodo" class="btn btn-active btn-primary">Fetch todo</button>
    <div v-if="json.todo">{{ json.todo }}</div>
    <div v-else>todo is null</div>
  </div>
  <div class="mb-10">
    <button v-on:click="json.fetchPosts" class="btn btn-active btn-secondary">Fetch posts</button>
    <div v-if="json.posts">{{ json.posts }}</div>
    <div v-else>posts is null</div>
  </div>
</template>
