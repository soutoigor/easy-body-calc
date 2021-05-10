<template>
  <button :class="['button', color]">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

const validColors = ['primary', 'secondary']

export default defineComponent({
  props: {
    color: {
      type: String as PropType<string>,
      required: false,
      default: 'primary',
      validator: (value: string) => validColors.includes(value),
    },
  },
})
</script>

<style scoped>
.button {
  @apply outline-none transition-all duration-500 transform
  hover:bg-opacity-90 active:scale-y-105 shadow-md
  py-3 px-2 font-bold uppercase tracking-wide rounded-xl w-full;
}

.primary {
  @apply bg-opacity-80 bg-turbo text-black;
}

.secondary {
  @apply bg-black bg-opacity-40 border border-turbo;
}
</style>
