<template>
  <div
    class="border border-turbo rounded-lg flex justify-center items-center h-60 w-full"
  >
    <div class="gap-7 flex flex-col items-center">
      <span class="text-7xl italic font-black text-turbo">
        {{ formattedResult }}
      </span>
      <span
        data-testid="result"
        class="italic capitalize font-bold text-3xl lg:text-5xl"
      >
        {{ resultText }}
      </span>
    </div>
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
