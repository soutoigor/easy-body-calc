<template>
  <div v-frag>
    <section class="calc-section">
      <h2 class="calc-section__title">{{ formTitle }}</h2>
      <transition name="rotate">
        <div v-if="formResult.calories" class="calc-section__result">
          <DailyCaloriesResult :calc-result="formResult" />
          <AppButton
            data-testid="calculate-again"
            color="secondary"
            @click="setFormResult({ bmr: 0, calories: 0 })"
          >
            Calculate again
          </AppButton>
        </div>
        <div v-else class="calc-section__form-container">
          <DailyCaloriesForm @result="setFormResult" />
          <MeasureTips />
        </div>
      </transition>
    </section>
    <aside class="explanation-section">
      <AppExplanation>
        <template #title>DAILY CALORIES</template>
        <template #content>
          <p>
            Your <strong>daily calories</strong> is the sum of your
            <strong> basal metabolic rate</strong> (BMR) is the calories that
            your body needs to perform the body's most basic functions, like
            breathing, your brainc, etc, and the <strong>daily calories</strong>
            that your body use in your daily activities.
          </p>
          <p>
            This value represents the amount of calories that your body consumes
            during all the day. So, if you consume <b>more</b> calories than
            this result, you will gain <b>weight</b>, and consuming less, you
            will <strong>lose weight</strong>.
          </p>
        </template>
      </AppExplanation>
    </aside>
  </div>
</template>

<script lang="ts">
import DailyCaloriesForm from '@/components/daily-calories/DailyCaloriesForm.vue'
import DailyCaloriesResult from '@/components/daily-calories/DailyCaloriesResult.vue'
import AppExplanation from '@/components/common/AppExplanation.vue'
import MeasureTips from '@/components/common/MeasureTips.vue'
import AppButton from '@/components/common/AppButton.vue'
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'
import frag from 'vue-frag'
import { Result } from '../components/daily-calories/interface'

export default defineComponent({
  name: 'BodyFat',
  components: {
    DailyCaloriesForm,
    AppExplanation,
    DailyCaloriesResult,
    MeasureTips,
    AppButton,
  },
  directives: { frag },
  setup() {
    const formResult = reactive<Result>({
      bmr: 0,
      calories: 0,
    })

    const setFormResult = ({ bmr, calories }: Result) => {
      formResult.calories = calories
      formResult.bmr = bmr
    }

    const formTitle = computed(() =>
      formResult.calories
        ? 'Your result:'
        : 'Calculate your Daily Calories bellow:'
    )

    return {
      setFormResult,
      formResult,
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
