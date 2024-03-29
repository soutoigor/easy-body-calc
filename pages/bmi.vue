<template>
  <div v-frag>
    <section class="calc-section">
      <h2 class="calc-section__title">{{ formTitle }}</h2>
      <transition name="rotate">
        <div v-if="result" key="result" class="calc-section__result">
          <BmiResult :result="result" />
          <AppButton
            data-testid="calculate-again"
            color="secondary"
            @click="setResult(0)"
          >
            Calculate again
          </AppButton>
        </div>
        <div v-else key="form" class="calc-section__form-container">
          <BmiForm @result="setResult" />
          <MeasureTips />
        </div>
      </transition>
    </section>
    <aside class="explanation-section">
      <div v-if="result">
        <h3 class="explanation-section__title">Comparations:</h3>
        <BmiComparison />
      </div>
      <AppExplanation v-else>
        <template #title>BMI</template>
        <template #content>
          <p>
            BMI means Body Mass Index, it is a measure based on the weight and
            height that applies to adult men and women.
          </p>
          <p>
            The BMI shouldn’t be calculated for aesthetic purposes, but for your
            health.
          </p>
          <p>
            Being in the right BMI is important because being under or
            overweight, can increase the risk of diseases such as strokes and
            heart attacks.
          </p>
        </template>
      </AppExplanation>
    </aside>
  </div>
</template>

<script lang="ts">
import BmiForm from '@/components/bmi/BmiForm.vue'
import BmiResult from '@/components/bmi/BmiResult.vue'
import BmiComparison from '@/components/bmi/BmiComparison.vue'
import AppExplanation from '@/components/common/AppExplanation.vue'
import AppButton from '@/components/common/AppButton.vue'
import MeasureTips from '@/components/common/MeasureTips.vue'
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import frag from 'vue-frag'

export default defineComponent({
  name: 'Bmi',
  components: {
    BmiForm,
    AppExplanation,
    BmiResult,
    AppButton,
    BmiComparison,
    MeasureTips,
  },
  directives: { frag },
  setup() {
    const result = ref<number>(0)

    const setResult = (value: number) => {
      result.value = value
    }

    const formTitle = computed(() =>
      result.value ? 'Your result:' : 'Calculate your BMI bellow:'
    )

    return {
      setResult,
      result,
      formTitle,
    }
  },
})
</script>

<style scoped>
.calc-section {
  @apply w-full lg:w-1/3;
}

.calc-section__title {
  @apply mb-4 text-2xl font-bold;
}

.calc-section__result {
  @apply flex flex-col items-center gap-8;
}

.calc-section__form-container {
  @apply flex flex-col gap-7;
}

.explanation-section {
  @apply flex justify-center lg:w-1/3;
}

.explanation-section__title {
  @apply mb-6 text-2xl font-bold;
}
</style>
