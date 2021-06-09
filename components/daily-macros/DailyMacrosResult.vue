<template>
  <div>
    <div class="result">
      <div class="result__item">
        <span class="result__value">{{ result.carb }}</span>
        <span class="result__text">Carbs</span>
      </div>
      <div class="result__item">
        <span class="result__value">{{ result.fat }}</span>
        <span class="result__text">Fat</span>
      </div>
      <div class="result__item">
        <span class="result__value">{{ result.protein }}</span>
        <span class="result__text">Protein</span>
      </div>
      <div class="result__item">
        <span class="result__value">{{ result.calories }}</span>
        <span class="result__text">Calories</span>
      </div>
    </div>
    <p class="result__advice">{{ resultAdvice }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from '@nuxtjs/composition-api'
import { IDailyMacrosResult } from '@/types/dailyMacros'
import { GOALS } from '@/constants/dailyMacros'

const { LOSE, KEEP, GAIN } = GOALS

export default defineComponent({
  props: {
    result: {
      type: Object as PropType<IDailyMacrosResult>,
      required: true,
    },
  },
  setup({ result }) {
    const messageByGoal = {
      [LOSE]:
        'lose weight, at the end of a every week, you have not lose weight, reduce the Carb value in 10% until you reach your goal',
      [KEEP]: 'keep your weight',
      [GAIN]:
        'gain weight, at the end of a every week, you have not, increase the Carb value in 10% until you reach your goal',
    }

    const resultAdvice = computed(
      () => `Reach the macros above everyday to ${messageByGoal[result.goal]}.`
    )

    return {
      resultAdvice,
    }
  },
})
</script>

<style scoped>
.result {
  @apply border border-turbo rounded-lg h-60 w-full;
  @apply flex items-center justify-evenly;
}

.result__item {
  @apply flex flex-col items-center;
}

.result__value {
  @apply text-3xl lg:text-4xl italic font-black text-turbo;
}

.result__text {
  @apply italic capitalize font-bold text-xl lg:text-2xl;
}

.result__advice {
  @apply mt-4 text-xl;
}
</style>
