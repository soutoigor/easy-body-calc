<template>
  <div class="result">
    <span class="result__value">
      {{ formattedResult }}
    </span>
    <span data-testid="result" class="result__text">
      {{ resultText }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    result: {
      type: Number as PropType<number>,
      required: false,
      default: 0,
    },
  },
  setup({ result }) {
    const getResultText = (value: number) => {
      if (value < 18.5) return 'underweight'
      if (value >= 18.5 && value <= 24.9) return 'normal'
      if (value >= 25 && value <= 29.9) return 'overweight'
      if (value >= 30 && value <= 35) return 'obese'
      return 'extremely obese'
    }

    const resultText = computed(() => getResultText(result))

    const formattedResult = computed(() => result.toFixed(1))

    return {
      resultText,
      formattedResult,
    }
  },
})
</script>

<style scoped>
.result {
  @apply border border-turbo rounded-lg h-60 w-full;
  @apply gap-7 flex flex-col items-center justify-center;
}

.result__value {
  @apply text-7xl italic font-black text-turbo;
}

.result__text {
  @apply italic capitalize font-bold text-3xl lg:text-5xl;
}
</style>
