<template>
  <div v-frag>
    <section class="calc-section">
      <h2 class="calc-section__title">{{ formTitle }}</h2>
      <transition name="rotate">
        <div v-if="result" key="result" class="calc-section__result">
          <DailyMacrosResult :result="result" />
          <AppButton
            data-testid="calculate-again"
            color="secondary"
            @click="setResult(null)"
          >
            Calculate again
          </AppButton>
        </div>
        <div v-else key="form" class="calc-section__form-container">
          <DailyMacrosForm @result="setResult" />
          <MeasureTips />
        </div>
      </transition>
    </section>
    <aside class="explanation-section">
      <AppExplanation>
        <template #title>DAILY MACROS</template>
        <template #content>
          <p>
            There are 3 macronutrients present in our food, they are
            Carbohydrate, Fat and Protein. Each one has its goals to be consumed
            and its characteristics (calories per gram, time to absorb, etc).
          </p>
          <p>
            It's the total of calories that we ingest in the day that makes us
            gain, keep, or lose weight. It's pretty simple, if you ingest more
            than your body needs in a day (Daily calories), you will gain
            weight, and the opposite is true, if you ingest less than you need,
            you lose weight.
          </p>
          <p>
            But our body is smart, when you change your daily calorie intake, it
            adapts to survive with that new total of calories, and stop gaining
            or losing weight, so you need to adapt your macros. Generally, we
            change the Carbohydrate in 10%, up if gaining weight, down if
            losing. you can change the Fat too, if you already changed the
            Carbohydrate too much. If the carbohydrate is too low, add more
            cardio exercises.
          </p>
          <p>
            But you need to do it slowly, unhurried, if you make these changes
            too fast, there will come a time when you will no longer be able to
            add or remove calories in a healthy way, and you will no longer
            evolve.
          </p>
          <p>And you can eat anything you want, if it fits your macros.</p>
        </template>
      </AppExplanation>
      <AppButton data-testid="open-macros" text @click="setMacrosModal(true)">
        Know more about each macro
      </AppButton>
      <AppModal v-show="macrosModal" @close="setMacrosModal(false)">
        <template #title>Macronutrients</template>
        <template #content>
          <h3 class="macros__title">Protein</h3>
          <p>
            Each gram of protein has 4 calories. The function of protein is to
            create and regenerate our body tissues such as skin, nails, hair,
            organs and muscles. Like carbohydrate, it changes the absorption
            time. depending on its origin (example of slow absorption: eggs,
            casein. Example of quick: whey, meat. The ideal is to ingest protein
            from slow absorption before a long period without eating. But that's
            not will cause big differences, worry more about the biological
            value of this protein, proteins from animal sources such as eggs and
            meat have a better biological value than q from whole sources. the
            better the biological value, the better your muscles will absorb.
          </p>
          <h3 class="macros__title">Fat</h3>
          <p>
            Each gram of fat has 9 calories. The function of fat is provide
            energy for the body, synthesize hormones, are the vehicle for
            fat-soluble vitamins, compose cellular structures and increase the
            palatability of foods. Your fonts can be both animal and vegetable.
            The main sources of fat are: cheeses, meat, milk, olives,
            chocolates, butter, eggs, etc.
          </p>
          <h3 class="macros__title">Carbohydrate</h3>
          <p>
            Carbohydrate has 4 calories per gram. Its function is to provide
            energy and glycogen for muscles, brain, bone marrow and various
            functions of the nervous system. Depending on the source of
            carbohydrate, this changes your glycemic index, which is the speed
            that it is processed and peak amount of insulin it produces.
            Carbohydrate when it is quickly processed and is not used as a
            source of energy, it converts into adipose tissue (its fats), by
            this, avoid foods with a high glycemic index such as: sweets, soft
            drinks, food made with flour such as Paes and pasta. use wisely, put
            this type of food for a post workout, or upon waking up, which is
            when your body really needs to use itself.
          </p>
        </template>
      </AppModal>
    </aside>
  </div>
</template>

<script lang="ts">
import DailyMacrosForm from '@/components/daily-macros/DailyMacrosForm.vue'
import DailyMacrosResult from '@/components/daily-macros/DailyMacrosResult.vue'
import AppExplanation from '@/components/common/AppExplanation.vue'
import AppModal from '@/components/common/AppModal.vue'
import AppButton from '@/components/common/AppButton.vue'
import MeasureTips from '@/components/common/MeasureTips.vue'
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import frag from 'vue-frag'
import { TResultForm } from '@/types/dailyMacros'

export default defineComponent({
  name: 'DailyMacros',
  components: {
    DailyMacrosForm,
    AppExplanation,
    AppModal,
    DailyMacrosResult,
    AppButton,
    MeasureTips,
  },
  directives: { frag },
  setup() {
    const result = ref<TResultForm>(null)
    const macrosModal = ref<boolean>(false)

    const setResult = (value: TResultForm) => {
      result.value = value
    }

    const setMacrosModal = (value: boolean) => {
      macrosModal.value = value
    }

    const formTitle = computed(() =>
      result.value ? 'Your result:' : 'Calculate your Macros bellow:'
    )

    return {
      setResult,
      setMacrosModal,
      formTitle,
      result,
      macrosModal,
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
  @apply flex gap-2 flex-col items-center lg:w-1/3;
}

.explanation-section__title {
  @apply mb-6 text-2xl font-bold;
}

.macros__title {
  @apply text-xl mt-3 font-semibold;
}
</style>
