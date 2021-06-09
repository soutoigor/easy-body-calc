<template>
  <div class="result">
    <span class="result__text">Daily calories:</span>
    <span class="result__value">
      {{ calcResult.calories }}
    </span>
    <hr class="border-white border-opacity-50 w-3/5" />
    <span class="result__text">BMR:</span>
    <span class="result__value">
      {{ calcResult.bmr }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { IDailyCaloriesResult } from '@/types/dailyCalories'

export default defineComponent({
  props: {
    calcResult: {
      type: Object as PropType<IDailyCaloriesResult>,
      required: true,
    },
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
