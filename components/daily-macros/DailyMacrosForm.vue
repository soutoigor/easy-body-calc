<template>
  <form class="bodyfat-form" @submit.prevent="sendResult">
    <InputNumber v-model="form.calories" label="Daily calories" />
    <span v-if="!form.calories">
      Don't know your <b>Daily Calories</b>?
      <NuxtLink :to="dailyCaloriesLink" class="calories-link">
        Calculate here
      </NuxtLink>
    </span>
    <InputNumber v-model="form.weight" label="Weight (kg)" />
    <InputSelect
      v-model="form.goal"
      label="Select your goal"
      :items="goalItems"
    />
    <AppButton type="submit" data-testid="submit" :disabled="disabled">
      Calculate
    </AppButton>
  </form>
</template>

<script lang="ts">
import InputNumber from '@/components/common/InputNumber.vue'
import InputSelect from '@/components/common/InputSelect.vue'
import AppButton from '@/components/common/AppButton.vue'
import { SITE_MAP } from '@/constants/siteMap'
import {
  computed,
  defineComponent,
  reactive,
  onMounted,
  useRoute,
} from '@nuxtjs/composition-api'
import { IDailyMacros, IDailyMacrosResult, TGoal } from '@/types/dailyMacros'
import { TSelectItems } from '@/types/selectOption'
import { GOALS } from '@/constants/dailyMacros'

const { LOSE, KEEP, GAIN } = GOALS

export default defineComponent({
  components: {
    InputNumber,
    AppButton,
    InputSelect,
  },
  emits: ['result'],
  setup(_, { emit }) {
    const route = useRoute()

    const goalItems: TSelectItems = [
      {
        label: 'Lose weight',
        value: LOSE,
      },
      {
        label: 'Keep weight',
        value: KEEP,
      },
      {
        label: 'Gain weight',
        value: GAIN,
      },
    ]

    const form = reactive<IDailyMacros>({
      calories: 0,
      weight: 0,
      goal: LOSE,
    })

    const disabled = computed<boolean>(() =>
      Object.values(form).some((value) => !value)
    )

    onMounted(() => {
      const { calories } = route.value.query
      if (calories) {
        form.calories = +calories
      }
    })

    const getNewCalories = (goal: TGoal, calories: number) => {
      const caloriesByGoal = {
        [LOSE]: calories - (calories * 10) / 100,
        [KEEP]: calories,
        [GAIN]: calories + (calories * 10) / 100,
      }

      return caloriesByGoal[goal]
    }

    const calculateDailyMacros = (form: IDailyMacros): IDailyMacrosResult => {
      const newCalories = getNewCalories(form.goal, form.calories)

      const protein = Math.floor(form.weight * 2.4)
      const fat = Math.floor((newCalories * 25) / 100 / 9)
      const carb = Math.floor((newCalories * 50) / 100 / 4)
      const calories = protein * 4 + fat * 9 + carb * 4

      return {
        protein,
        fat,
        carb,
        calories,
        goal: form.goal,
      }
    }

    const sendResult = () => {
      const result = calculateDailyMacros(form)

      emit('result', result)
    }

    return {
      sendResult,
      form,
      disabled,
      goalItems,
      dailyCaloriesLink: SITE_MAP.CALORIES.url,
    }
  },
})
</script>

<style scoped>
.bodyfat-form {
  @apply flex flex-col gap-8;
}

.calories-link {
  @apply text-turbo font-semibold text-lg underline;
}
</style>
