<template>
  <table class="table">
    <thead>
      <tr class="table__thead-tr">
        <th class="table__th">value</th>
        <th class="table__th">result</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="{ value, result } of comparisonData"
        :key="value"
        class="table__tr"
      >
        <td class="table__td">{{ value }}</td>
        <td class="table__td">{{ result }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { BMI_RESULTS } from '@/constants/bmi'

const { UNDERWEIGHT, NORMAL, OVERWEIGHT, OBESE, EXTREMELY_OBESE } = BMI_RESULTS

export default defineComponent({
  setup() {
    const comparisonData = [
      {
        value: '<18.5',
        result: UNDERWEIGHT,
      },
      {
        value: '18.5~24.9',
        result: NORMAL,
      },
      {
        value: '25~29.9',
        result: OVERWEIGHT,
      },
      {
        value: '30~34.9',
        result: OBESE,
      },
      {
        value: '>35',
        result: EXTREMELY_OBESE,
      },
    ]

    return {
      comparisonData,
    }
  },
})
</script>

<style scoped>
.table__thead-tr {
  @apply border-b-2 border-gray-400 border-opacity-50;
}

.table {
  @apply table-fixed w-full;
}

.table__th {
  @apply w-1/2 text-2xl text-turbo even:border-l-2 odd:border-r-2
   border-gray-400 border-opacity-50 py-3;
}

.table__tr {
  @apply border-b-2 last:border-b-0 border-gray-400 border-opacity-50;
}

.table__td {
  @apply w-1/2 text-xl py-5 text-center h-8 even:border-l-2
  odd:border-r-2 border-gray-400 border-opacity-50;
}
</style>
