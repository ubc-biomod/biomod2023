<script setup lang="ts">
const props = defineProps<{ to: string }>()

import { ref } from 'vue'

const dropdown = ref(false)
const toggle = ref(false)

const handleClickOutside = () => {
  toggle.value = false
  dropdown.value = false
}
</script>

<template>
  <div
    v-click-outside="handleClickOutside"
    class="flex items-center"
    @mouseenter="
      () => {
        if (!toggle) dropdown = true
      }
    "
    @mouseleave="
      () => {
        if (!toggle) dropdown = false
      }
    "
    @click="toggle = !toggle"
  >
    <div class="flex gap-2 py-4 px-8 hover:opacity-80 transition duration-200">
      <slot name="text"></slot>
      <svg class="w-3 stroke-gold -rotate-90" viewBox="0 0 30 17" fill="none">
        <path d="M1.2074 1.25L14.7074 14.75L28.2074 1.25" stroke-width="3" />
      </svg>
    </div>

    <div v-if="dropdown || toggle" class="fixed ml-[18.8rem] mt-8">
      <div class="bg-slate p-4 shadow-[5px_0_35px_rgba(0,0,0,0.4)] rounded-3xl">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
