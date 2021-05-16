<template>
  <table class="table">
    <thead>
      <tr class="thead__tr">
        <th class="th">value</th>
        <th class="th">result</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ value, result } of comparisonData" :key="value" class="tr">
        <td class="td">{{ value }}</td>
        <td class="td">{{ result }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const comparisonData = [
      {
        value: '<18.5',
        result: 'underweight',
      },
      {
        value: '18.5~24.9',
        result: 'normal',
      },
      {
        value: '25~29.9',
        result: 'overweight',
      },
      {
        value: '30~34.9',
        result: 'obese',
      },
      {
        value: '>35',
        result: 'extremely obese',
      },
    ]

    return {
      comparisonData,
    }
  },
})
</script>

<style scoped>
.thead__tr {
  @apply border-b-2 border-gray-400 border-opacity-50;
}

.table {
  @apply table-fixed w-full;
}

.th {
  @apply w-1/2 text-2xl text-turbo even:border-l-2 odd:border-r-2
   border-gray-400 border-opacity-50 py-3;
}

.tr {
  @apply border-b-2 last:border-b-0 border-gray-400 border-opacity-50;
}

.td {
  @apply w-1/2 text-xl py-5 text-center h-8 even:border-l-2
  odd:border-r-2 border-gray-400 border-opacity-50;
}
</style>
