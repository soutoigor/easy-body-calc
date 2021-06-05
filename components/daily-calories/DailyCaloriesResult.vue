<template>
  <div class="result">
    <span class="result__text">Daily calories:</span>
    <span class="result__value">
      {{ floor(calcResult.calories) }}
    </span>
    <hr class="border-white border-opacity-50 w-3/5" />
    <span class="result__text">BMR:</span>
    <span class="result__value">
      {{ floor(calcResult.bmr) }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { Result } from './interface'

export default defineComponent({
  props: {
    calcResult: {
      type: Object as PropType<Result>,
      required: true,
    },
  },
  setup() {
    const floor = (result: number) => Math.floor(result)

    return { floor }
  },
})
</script>

<style scoped>
.result {
  @apply border border-turbo rounded-lg h-80 w-full;
  @apply gap-5 flex flex-col items-center justify-center;
}

.result__value {
  @apply text-6xl italic font-black text-turbo;
}

.result__text {
  @apply italic capitalize font-bold text-2xl lg:text-3xl;
}
</style>
