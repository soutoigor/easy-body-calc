<template>
  <div>
    <p>Here is a comparation of how each step of percentage looks like:</p>
    <img :src="comparisonPictureUrl" alt="comparison picture" />
  </div>
</template>

<script lang="ts">
import men from '@/assets/images/bf-men.jpg'
import women from '@/assets/images/bf-women.jpg'
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'
import { TBiologicalSex } from '@/types/biologicalSex'
import { BIOLOGICAL_SEX } from '@/constants/biologicalSex'

export default defineComponent({
  props: {
    biologicalSex: {
      type: String as PropType<TBiologicalSex>,
      required: true,
      validator: (value: string) =>
        Object.values(BIOLOGICAL_SEX).includes(value),
    },
  },
  setup({ biologicalSex }) {
    const comparisonPictureUrl = computed(() =>
      biologicalSex === BIOLOGICAL_SEX.MALE ? men : women
    )

    return {
      comparisonPictureUrl,
    }
  },
})
</script>
