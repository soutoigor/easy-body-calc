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
import InputSelect, { Items } from '@/components/common/InputSelect.vue'
import AppButton from '@/components/common/AppButton.vue'
import { siteMap } from '@/utils/siteMap'
import {
  computed,
  defineComponent,
  reactive,
  onMounted,
  useRoute,
} from '@nuxtjs/composition-api'
import { DailyMacros, Result, Goal } from './interface'

export default defineComponent({
  components: {
    InputNumber,
    AppButton,
    InputSelect,
  },
  emits: ['result'],
  setup(_, { emit }) {
    const route = useRoute()

    const goalItems: Items = [
      {
        label: 'Lose weight',
        value: 'lose',
      },
      {
        label: 'Keep weight',
        value: 'keep',
      },
      {
        label: 'Gain weight',
        value: 'gain',
      },
    ]

    const form = reactive<DailyMacros>({
      calories: 0,
      weight: 0,
      goal: 'lose',
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

    const getNewCalories = (goal: Goal, calories: number) => {
      const caloriesByGoal = {
        lose: calories - (calories * 10) / 100,
        keep: calories,
        gain: calories + (calories * 10) / 100,
      }

      return caloriesByGoal[goal]
    }

    const calculateDailyMacros = (form: DailyMacros): Result => {
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
      dailyCaloriesLink: siteMap.CALORIES.url,
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
