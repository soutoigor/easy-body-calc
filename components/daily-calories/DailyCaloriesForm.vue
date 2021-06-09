<template>
  <form class="bodyfat-form" @submit.prevent="sendResult">
    <InputNumber
      v-model="form.height"
      data-testid="height"
      label="Height (cm)"
    />
    <InputNumber
      v-model="form.weight"
      label="Weight (kg)"
      data-testid="weight"
    />
    <InputNumber v-model="form.age" data-testid="age" label="Age" />
    <InputSelect
      v-model="form.biologicalSex"
      label="Biological sex"
      :items="BIOLOGICAL_SEX_ITEMS"
    />
    <InputSelect
      v-model="form.activity"
      label="Exercise level"
      :items="activityLevelItems"
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
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api'
import {
  IDailyCalories,
  IBmr,
  IDailyCaloriesResult,
} from '@/types/dailyCalories'
import { BIOLOGICAL_SEX, BIOLOGICAL_SEX_ITEMS } from '@/constants/biologicalSex'
import { TSelectItems } from '@/types/selectOption'
import { ACTIVITY } from '@/constants/dailyCalories'

const { SEDENTARY, SLIGHTLY, MODERATELY, ACTIVE, VERY } = ACTIVITY

const { MALE, FEMALE } = BIOLOGICAL_SEX

const activityLevelItems: TSelectItems = [
  {
    label: 'Sedentary',
    value: SEDENTARY,
  },
  {
    label: 'Slightly active',
    value: SLIGHTLY,
  },
  {
    label: 'Moderately active',
    value: MODERATELY,
  },
  {
    label: 'Active',
    value: ACTIVE,
  },
  {
    label: 'Very active',
    value: VERY,
  },
]

export default defineComponent({
  components: {
    InputNumber,
    AppButton,
    InputSelect,
  },
  emits: ['result'],
  setup(_, { emit }) {
    const form = reactive<IDailyCalories>({
      height: 0,
      weight: 0,
      age: 0,
      biologicalSex: MALE,
      activity: 0,
    })

    const disabled = computed<boolean>(() =>
      Object.values(form).some((value) => !value)
    )

    const isFemale = () => form.biologicalSex === FEMALE

    const getMenBmr = ({ height, weight, age }: IBmr) =>
      88.362 + 13.397 * weight + 4.799 * height - 5.677 * age

    const getWomenBmr = ({ weight, height, age }: IBmr) =>
      447.593 + 9.247 * weight + 3.098 * height - 4.33 * age

    const calculateDailyCalories = (
      form: IDailyCalories
    ): IDailyCaloriesResult => {
      const bmr = isFemale() ? getWomenBmr(form) : getMenBmr(form)
      const calories = bmr * form.activity

      return { bmr, calories }
    }

    const sendResult = () => {
      const result = calculateDailyCalories(form)

      emit('result', result)
    }

    return {
      sendResult,
      form,
      disabled,
      isFemale,
      activityLevelItems,
      BIOLOGICAL_SEX_ITEMS,
    }
  },
})
</script>

<style scoped>
.bodyfat-form {
  @apply flex flex-col gap-8;
}
</style>
