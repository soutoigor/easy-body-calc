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
import { IBodyFatResult } from '@/types/bodyFat'
import { BODY_FAT_RESULTS } from '@/constants/bodyFat'
import { BIOLOGICAL_SEX } from '@/constants/biologicalSex'

const { MALE } = BIOLOGICAL_SEX

const {
  COMPETITOR,
  VERY_GOOD,
  GOOD,
  IN_AVERAGE,
  ABOVE_AVERAGE,
  OBESE,
} = BODY_FAT_RESULTS

export default defineComponent({
  props: {
    calcResult: {
      type: Object as PropType<IBodyFatResult>,
      required: true,
    },
  },
  setup({ calcResult: { result, biologicalSex } }) {
    const getMenValues = (value: number) => {
      if (value <= 6) return COMPETITOR
      if (value > 6 && value < 10) return VERY_GOOD
      if (value >= 10 && value < 15) return GOOD
      if (value >= 15 && value < 20) return IN_AVERAGE
      if (value >= 20 && value < 26) return ABOVE_AVERAGE
      return OBESE
    }

    const getWomenValues = (value: number) => {
      if (value <= 12) return COMPETITOR
      if (value > 12 && value <= 15) return VERY_GOOD
      if (value > 15 && value <= 20) return GOOD
      if (value > 20 && value <= 25) return IN_AVERAGE
      if (value > 25 && value <= 30) return ABOVE_AVERAGE
      return OBESE
    }

    const getResultText = (value: number) => {
      if (biologicalSex === MALE) return getMenValues(value)
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
