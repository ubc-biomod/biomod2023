<script setup lang="ts">
import katex from 'katex'
import { type Ref, ref, onMounted } from 'vue'
const props = withDefaults(
  defineProps<{
    formula: string
    displayMode?: boolean
  }>(),
  {
    formula: '',
    displayMode: false
  }
)

const containerRef = ref(null) as unknown as Ref<HTMLElement>
onMounted(() => {
  katex.render(props.formula, containerRef.value, {
    throwOnError: false,
    displayMode: props.displayMode
  })
})
</script>
<template>
  <span
    ref="containerRef"
    class="w-full overflow-x-scroll bg-transparent invisible-scroller text-center"
  >
  </span>
</template>

<!-- <template>
    hello
    <vue-mathjax :formula="formula"></vue-mathjax>
</template> -->
