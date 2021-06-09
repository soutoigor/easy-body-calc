<template>
  <div v-frag>
    <section class="calc-section">
      <h2 class="calc-section__title">{{ formTitle }}</h2>
      <transition name="rotate">
        <div v-if="formResult.result" class="calc-section__result">
          <BodyFatResult :calc-result="formResult" />
          <AppButton
            data-testid="calculate-again"
            color="secondary"
            @click="setFormResult({ result: null, biologicalSex: null })"
          >
            Calculate again
          </AppButton>
        </div>
        <div v-else class="calc-section__form-container">
          <BodyFatForm @result="setFormResult" />
          <MeasureTips />
        </div>
      </transition>
    </section>
    <aside class="explanation-section">
      <div v-if="formResult.result">
        <h3 class="explanation-section__title">Comparations:</h3>
        <BodyFatComparison :biological-sex="formResult.biologicalSex" />
      </div>
      <AppExplanation v-else>
        <template #title>BODY FAT</template>
        <template #content>
          <p>
            The <strong>Body Fat</strong> calc is the most important to manage
            your aesthetic results. It informs you of the fat percentage of your
            body.
          </p>
          <p>
            The reason that the <strong>body fat</strong> is the best to manage
            your results, is because many times, you can be
            <strong>losing fat</strong>, and also gaining muscle mass, so your
            weight is not changing too much, but it doesn't mean you're not
            evolving.
          </p>
          <p>
            A <strong>bodybuilder</strong>, for example, can have more than
            100Kg, and <strong>5% of body fat</strong>, the BMI will inform that
            he is obese, but he's <strong>heavy</strong>, and not
            <strong>obese</strong>.
          </p>
          <p>
            Remeber, a very low or very high percentage of Body Fat for much
            time is not <strong>healthy</strong>. Keep always the
            <strong>balance</strong>.
          </p>
        </template>
      </AppExplanation>
    </aside>
  </div>
</template>

<script lang="ts">
import BodyFatForm from '@/components/body-fat/BodyFatForm.vue'
import BodyFatResult from '@/components/body-fat/BodyFatResult.vue'
import BodyFatComparison from '@/components/body-fat/BodyFatComparison.vue'
import AppExplanation from '@/components/common/AppExplanation.vue'
import MeasureTips from '@/components/common/MeasureTips.vue'
import AppButton from '@/components/common/AppButton.vue'
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'
import frag from 'vue-frag'
import { IBodyFatResult } from '@/types/bodyFat'

export default defineComponent({
  name: 'IBodyFat',
  components: {
    BodyFatForm,
    AppExplanation,
    BodyFatResult,
    MeasureTips,
    AppButton,
    BodyFatComparison,
  },
  directives: { frag },
  setup() {
    const formResult = reactive<IBodyFatResult>({
      result: 0,
      biologicalSex: 'F',
    })

    const setFormResult = ({ result, biologicalSex }: IBodyFatResult) => {
      formResult.result = result
      formResult.biologicalSex = biologicalSex
    }

    const formTitle = computed(() =>
      formResult.result ? 'Your result:' : 'Calculate your Body Fat bellow:'
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
