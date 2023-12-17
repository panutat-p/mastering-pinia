import { defineStore } from 'pinia'
import { ref } from 'vue'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const useJsonStore = defineStore('json', () => {
  const todo = ref<TodoPayload | null>(null)
  const posts = ref<PostPayload[] | null>(null)

  const fetchTodo = async () => {
    const res = await fetch(`${BASE_URL}/todos/1`)
    todo.value = await res.json()
  }
  const fetchPosts = async () => {
    const res = await fetch(`${BASE_URL}/posts`)
    posts.value = await res.json()
  }

  return { todo, posts, fetchTodo, fetchPosts }
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
