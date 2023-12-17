import { defineStore } from 'pinia'
import { ref } from 'vue'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const useJsonStore = defineStore('json', () => {
  const todo = ref<TodoPayload | null>(null)
  const isTodoLoading = ref(false)
  const posts = ref<PostPayload[] | null>(null)
  const isPostsLoading = ref(false)
  const fetchTodo = async () => {
    isTodoLoading.value = true
    const res = await fetch(`${BASE_URL}/todos/1`)
    todo.value = await res.json()
    isTodoLoading.value = false
  }
  const fetchPosts = async () => {
    isPostsLoading.value = true
    const res = await fetch(`${BASE_URL}/posts`)
    posts.value = await res.json()
    isPostsLoading.value = false
  }

  return { todo, posts, fetchTodo, fetchPosts, isTodoLoading, isPostsLoading }
})

type TodoPayload = {
  userId: number
  id: number
  title: string
  completed: boolean
}

type PostPayload = {
  userId: number
  id: number
  title: string
  body: string
}
