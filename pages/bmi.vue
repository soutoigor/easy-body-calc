<template>
  <Fragment>
    <section class="w-full lg:w-1/3">
      <h2 class="mb-4 text-2xl font-bold">{{ formTitle }}</h2>
      <transition name="rotate">
        <div v-if="result" class="flex flex-col items-center gap-8">
          <BmiResult :result="result" />
          <AppButton
            data-testid="calculate-again"
            color="secondary"
            @click="setResult(0)"
          >
            Calculate again
          </AppButton>
        </div>
        <BmiForm v-else @result="setResult" />
      </transition>
    </section>
    <aside class="flex justify-center lg:w-1/3">
      <div v-if="result">
        <h3 class="mb-6 text-2xl font-bold">Comparations:</h3>
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
            Being in the right BMI is important because being under or over
            weight, influence on health, increasing the risc of diseases such as
            strokes and heart attacks, when you are overweight.
          </p>
        </template>
      </AppExplanation>
    </aside>
  </Fragment>
</template>

<script lang="ts">
import BmiForm from '@/components/bmi/BmiForm.vue'
import BmiResult from '@/components/bmi/BmiResult.vue'
import BmiComparison from '@/components/bmi/BmiComparison.vue'
import AppExplanation from '@/components/common/AppExplanation.vue'
import AppButton from '@/components/common/AppButton.vue'
import { Fragment } from 'vue-fragment'
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Bmi',
  components: {
    BmiForm,
    AppExplanation,
    BmiResult,
    Fragment,
    AppButton,
    BmiComparison,
  },
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
.rotate-leave-active,
.rotate-enter-active {
  @apply transition-all duration-500 ease-linear;
}
.rotate-enter {
  @apply absolute opacity-0;
  transform: rotateY(180deg);
}
.rotate-leave-to {
  @apply absolute opacity-0;
  transform: rotateY(-180deg);
}
</style>
