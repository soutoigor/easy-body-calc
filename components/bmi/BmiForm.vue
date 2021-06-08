<template>
  <form class="bmi-form" @submit.prevent="sendResult">
    <InputNumber
      v-model="form.height"
      placeholder="Ex: 164"
      name="height"
      data-testid="height"
      label="Height (cm)"
    />
    <InputNumber
      v-model="form.weight"
      placeholder="Ex: 73"
      name="weight"
      data-testid="weight"
      label="Weight (kg)"
    />
    <AppButton type="submit" data-testid="submit" :disabled="disabled">
      Calculate
    </AppButton>
  </form>
</template>

<script lang="ts">
import InputNumber from '@/components/common/InputNumber.vue'
import AppButton from '@/components/common/AppButton.vue'
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api'
import { Bmi } from './interface'

export default defineComponent({
  components: {
    InputNumber,
    AppButton,
  },
  emits: ['result'],
  setup(_, { emit }) {
    const form = reactive<Bmi>({
      height: 0,
      weight: 0,
    })

    const disabled = computed<boolean>(() => !form.height || !form.weight)

    const calculateBmi = ({ height, weight }: Bmi) => {
      if (height && weight) return (weight / height / height) * 10000
      return 0
    }

    const sendResult = () => {
      const result = calculateBmi(form)

      emit('result', result)
    }

    return {
      sendResult,
      form,
      disabled,
    }
  },
})
</script>

<style scoped>
.bmi-form {
  @apply flex flex-col gap-8;
}
</style>
