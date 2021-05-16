<template>
  <button
    :type="type"
    :class="['button', color]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

const validColors = ['primary', 'secondary']

export default defineComponent({
  name: 'AppButton',
  props: {
    color: {
      type: String as PropType<string>,
      required: false,
      default: 'primary',
      validator: (value: string) => validColors.includes(value),
    },
    type: {
      type: String as PropType<string>,
      required: false,
      default: 'button',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
  emits: ['click'],
})
</script>

<style scoped>
.button {
  @apply outline-none transition-all duration-500 transform;
  @apply hover:bg-opacity-90 active:scale-y-105 shadow-md text-xl;
  @apply py-3 px-2 font-bold uppercase tracking-wide rounded-xl w-full;
  @apply disabled:bg-gray-500 disabled:text-black disabled:shadow-none;
}

.primary {
  @apply bg-opacity-80 bg-turbo text-black;
}

.secondary {
  @apply bg-black bg-opacity-40 border border-turbo;
}
</style>
