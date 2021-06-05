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
import { BiologicalSex } from './interface'

export default defineComponent({
  props: {
    biologicalSex: {
      type: String as PropType<BiologicalSex>,
      required: true,
      validator: (value: string) => ['M', 'F'].includes(value),
    },
  },
  setup({ biologicalSex }) {
    const comparisonPictureUrl = computed(() =>
      biologicalSex === 'M' ? men : women
    )

    return {
      comparisonPictureUrl,
    }
  },
})
</script>
