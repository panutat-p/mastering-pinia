import { ref, computed, effectScope } from 'vue'

const store = new WeakMap<() => unknown, unknown>()

export const useBasicStore = defineStore(() => {
  const n = ref(0)
  const double = computed(() => n.value * 2)

  const increment = (amount = 1) => {
    n.value += amount
  }

  return { n, double, increment }
})

export function defineStore<R>(fn: () => R) {
  function useStore() {
    if (!store.has(fn)) {
      const scope = effectScope(true)
      store.set(
        fn,
        scope.run(() => fn())
      )
    }
    return store.get(fn) as R
  }

  return useStore
}
