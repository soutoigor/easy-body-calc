<template>
  <form class="bodyfat-form" @submit.prevent="sendResult">
    <InputNumber
      v-model="form.height"
      data-testid="height"
      label="Height (cm)"
    />
    <InputNumber v-model="form.neck" data-testid="neck" label="Neck (cm)" />
    <InputNumber
      v-model="form.abdomen"
      label="Abdomen (cm)"
      data-testid="abdomen"
    />
    <InputSelect
      v-model="form.biologicalSex"
      label="Biological sex"
      :items="biologicalSexItems"
    />
    <InputNumber
      v-show="isFemale"
      v-model="form.hip"
      data-testid="hip"
      label="Hip (cm)"
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
import { BodyFat, WomenCalc, MenCalc } from './interface'

export default defineComponent({
  components: {
    InputNumber,
    AppButton,
    InputSelect,
  },
  emits: ['result'],
  setup(_, { emit }) {
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

    const form = reactive<BodyFat>({
      height: 0,
      neck: 0,
      biologicalSex: 'M',
      abdomen: 0,
      hip: 0,
    })

    const isFemale = computed<boolean>(() => form.biologicalSex === 'F')

    const disabled = computed<boolean>(() =>
      Object.entries(form).some(([key, value]) =>
        key === 'hip' && !isFemale.value ? false : !value
      )
    )

    const getMenBodyFat = ({ abdomen, neck, height }: MenCalc) =>
      86.01 * Math.log10(abdomen - neck) - 70.041 * Math.log10(height) + 30.3

    const getWomenBodyFat = ({ abdomen, hip, neck, height }: WomenCalc) =>
      163.205 * Math.log10(abdomen + hip - neck) -
      97.684 * Math.log10(height) -
      104.912

    const calculateBodyFat = (form: BodyFat) => {
      if (isFemale.value) return getWomenBodyFat(form)
      return getMenBodyFat(form)
    }

    const sendResult = () => {
      const result = calculateBodyFat(form)

      emit('result', { result, biologicalSex: form.biologicalSex })
    }

    return {
      sendResult,
      form,
      disabled,
      isFemale,
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
