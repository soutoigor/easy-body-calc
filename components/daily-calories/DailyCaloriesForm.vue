<template>
  <form class="bodyfat-form" @submit.prevent="sendResult">
    <InputNumber
      v-model="form.height"
      data-testid="height"
      label="Height (cm)"
    />
    <InputNumber
      v-model="form.weight"
      label="Weight (cm)"
      data-testid="weight"
    />
    <InputNumber v-model="form.age" data-testid="age" label="Age" />
    <InputSelect
      v-model="form.biologicalSex"
      label="Biological sex"
      :items="biologicalSexItems"
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
import InputSelect, { Items } from '@/components/common/InputSelect.vue'
import AppButton from '@/components/common/AppButton.vue'
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api'
import { DailyCalories, Bmr } from './interface'

const biologicalSexItems: Items = [
  {
    label: 'Male',
    value: 'M',
  },
  {
    label: 'Female',
    value: 'F',
  },
]

const activityLevelItems: Items = [
  {
    label: 'Sedentary',
    value: 1.2,
  },
  {
    label: 'Slightly active',
    value: 1.375,
  },
  {
    label: 'Moderately active',
    value: 1.55,
  },
  {
    label: 'Active',
    value: 1.725,
  },
  {
    label: 'Very active',
    value: 1.9,
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
    const form = reactive<DailyCalories>({
      height: 0,
      weight: 0,
      age: 0,
      biologicalSex: null,
      activity: 0,
    })

    const disabled = computed<boolean>(() =>
      Object.values(form).some((value) => !value)
    )

    const isFemale = () => form.biologicalSex === 'F'

    const getMenBmr = ({ height, weight, age }: Bmr) =>
      88.362 + 13.397 * weight + 4.799 * height - 5.677 * age

    const getWomenBmr = ({ weight, height, age }: Bmr) =>
      447.593 + 9.247 * weight + 3.098 * height - 4.33 * age

    const calculateDailyCalories = (form: DailyCalories) => {
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
      biologicalSexItems,
    }
  },
})
</script>

<style scoped>
.bodyfat-form {
  @apply flex flex-col gap-8;
}
</style>
