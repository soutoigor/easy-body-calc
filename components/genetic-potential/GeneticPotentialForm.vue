<template>
  <form class="genetic-potential-form" @submit.prevent="sendResult">
    <InputNumber
      v-model="form.height"
      name="height"
      data-testid="height"
      label="Height (cm)"
    />
    <InputNumber
      v-model="form.wrist"
      name="wrist"
      data-testid="wrist"
      label="Wrist (cm)"
    />
    <InputNumber
      v-model="form.ankle"
      name="ankle"
      data-testid="ankle"
      label="Ankle (cm)"
    />
    <InputNumber
      v-model="form.bodyFat"
      name="bodyFat"
      placeholder="%"
      data-testid="bodyFat"
      label="Body fat"
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
import {
  IGeneticPotential,
  IGeneticPotentialResult,
} from '@/types/geneticPotential'

export default defineComponent({
  components: {
    InputNumber,
    AppButton,
  },
  emits: ['result'],
  setup(_, { emit }) {
    const form = reactive<IGeneticPotential>({
      height: 0,
      wrist: 0,
      ankle: 0,
      bodyFat: 0,
    })
    const geneticPotentialResult = reactive<IGeneticPotentialResult>({
      weight: 0,
      chest: 0,
      upperArm: 0,
      foreArm: 0,
      neck: 0,
      thigh: 0,
      calf: 0,
    })
    const disabled = computed(() => Object.values(form).some((x) => !x))

    function getChestMaxMeasure({ wrist, ankle, height }: IGeneticPotential) {
      return +(1.625 * wrist + 1.3682 * ankle + 0.3562 * height).toFixed(2)
    }

    function getUpperArmMaxMeasure({ wrist, height }: IGeneticPotential) {
      return +(1.1709 * wrist + 0.135 * height).toFixed(2)
    }

    function getForeArmMaxMeasure({ wrist, height }: IGeneticPotential) {
      return +(0.95 * wrist + 0.1041 * height).toFixed(2)
    }

    function getNeckMaxMeasure({ wrist, height }: IGeneticPotential) {
      return +(1.1875 * wrist + 0.1301 * height).toFixed(2)
    }

    function getThighMaxMeasure({ height, ankle }: IGeneticPotential) {
      return +(1.4737 * ankle + 0.1918 * height).toFixed(2)
    }

    function getCalfMaxMeasure({ height, ankle }: IGeneticPotential) {
      return +(0.9812 * ankle + 0.125 * height).toFixed(2)
    }

    function setMeasures() {
      geneticPotentialResult.chest = getChestMaxMeasure(form)
      geneticPotentialResult.upperArm = getUpperArmMaxMeasure(form)
      geneticPotentialResult.foreArm = getForeArmMaxMeasure(form)
      geneticPotentialResult.neck = getNeckMaxMeasure(form)
      geneticPotentialResult.thigh = getThighMaxMeasure(form)
      geneticPotentialResult.calf = getCalfMaxMeasure(form)
    }

    function sendResult() {
      setMeasures()

      emit('result', geneticPotentialResult)
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
.genetic-potential-form {
  @apply flex flex-col gap-8;
}
</style>
