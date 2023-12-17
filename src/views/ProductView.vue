<script setup lang="ts">
import { useJsonStore } from '@/stores/json'
import SquareSpinner from '@/components/SquareSpinner.vue'

const json = useJsonStore()
</script>

<template>
  <h1 class="text-4xl mb-10">products</h1>
  <section class="mb-10">
    <button v-on:click="json.fetchTodo" class="btn btn-active btn-primary mb-2">Fetch todo</button>
    <div v-if="json.todo">
      <div class="card w-4/12 bg-neutral text-white text-xs shadow-xl mb-2">
        <div class="card-body">
          <p>id: {{ json.todo?.id }}</p>
          <p>user_id: {{ json.todo?.userId }}</p>
          <p>title: {{ json.todo?.title }}</p>
        </div>
      </div>
    </div>
    <div v-else-if="json.isTodoLoading">
      <SquareSpinner />
    </div>
    <div v-else>todo is null</div>
  </section>
  <section class="mb-10">
    <button v-on:click="json.fetchPosts" class="btn btn-active btn-secondary mb-2">Fetch posts</button>
    <div v-if="json.posts">
      <div
        v-for="(post, index) in json.posts"
        v-bind:key="index"
        class="card w-8/12 bg-neutral text-white text-xs shadow-xl mb-2"
      >
        <div class="card-body">
          <p>{{ post.title }}</p>
        </div>
      </div>
    </div>
    <div v-else-if="json.isPostsLoading">
      <SquareSpinner />
    </div>
    <div v-else>posts is null</div>
  </section>
</template>
