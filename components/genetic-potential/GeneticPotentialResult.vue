<template>
  <div>
    <div class="genetic-potential-result">
      <p>Your estimated max muscle measurements at ~10% body fat would be:</p>
      <div class="genetic-potential-result__item">
        <span class="genetic-potential-result__text">Chest:</span>
        <span class="genetic-potential-result__value">{{ result.chest }}</span>
      </div>
      <div class="genetic-potential-result__item">
        <span class="genetic-potential-result__text">Upper Arm:</span>
        <span class="genetic-potential-result__value">{{
          result.upperArm
        }}</span>
      </div>
      <div class="genetic-potential-result__item">
        <span class="genetic-potential-result__text">Fore Arm:</span>
        <span class="genetic-potential-result__value">{{
          result.foreArm
        }}</span>
      </div>
      <div class="genetic-potential-result__item">
        <span class="genetic-potential-result__text">Thigh:</span>
        <span class="genetic-potential-result__value">{{ result.thigh }}</span>
      </div>
      <div class="genetic-potential-result__item">
        <span class="genetic-potential-result__text">Calf:</span>
        <span class="genetic-potential-result__value">{{ result.calf }}</span>
      </div>
      <div class="genetic-potential-result__item">
        <span class="genetic-potential-result__text">Neck:</span>
        <span class="genetic-potential-result__value">{{ result.neck }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { IGeneticPotentialResult } from '@/types/geneticPotential'

export default defineComponent({
  props: {
    result: {
      type: Object as PropType<IGeneticPotentialResult>,
      required: true,
    },
  },
})
</script>

<style scoped>
.genetic-potential-result {
  @apply border border-turbo rounded-lg h-auto p-3 w-full;
  @apply flex-col items-center;
}

.genetic-potential-result__item {
  @apply flex items-center gap-3;
}

.genetic-potential-result__value {
  @apply text-3xl lg:text-4xl italic font-black text-turbo;
}

.genetic-potential-result__text {
  @apply italic capitalize font-bold text-xl lg:text-2xl;
}

.genetic-potential-result__advice {
  @apply mt-4 text-xl;
}
</style>
