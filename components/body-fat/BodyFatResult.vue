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
import { Result } from './interface'

export default defineComponent({
  props: {
    calcResult: {
      type: Object as PropType<Result>,
      required: true,
    },
  },
  setup({ calcResult: { result, biologicalSex } }) {
    const getMenValues = (value: number) => {
      if (value <= 6) return 'competitor'
      if (value > 6 && value < 10) return 'very good shape'
      if (value >= 10 && value < 15) return 'good shape'
      if (value >= 15 && value < 20) return 'in average'
      if (value >= 20 && value < 26) return 'above average'
      return 'obese'
    }

    const getWomenValues = (value: number) => {
      if (value <= 12) return 'competitor'
      if (value > 12 && value <= 15) return 'very good shape'
      if (value > 15 && value <= 20) return 'good shape'
      if (value > 20 && value <= 25) return 'in average'
      if (value > 25 && value <= 30) return 'above average'
      return 'obese'
    }

    const getResultText = (value: number) => {
      if (biologicalSex === 'M') return getMenValues(value)
      return getWomenValues(value)
    }

    const resultText = computed(() => result && getResultText(result))

    const formattedResult = computed(() => result && result.toFixed(1))

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
