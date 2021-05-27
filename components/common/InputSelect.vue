<template>
  <div>
    <label class="field__label" for="select">{{ label }}</label>
    <select
      id="select"
      class="field__input"
      data-testid="field"
      :class="{ 'field__input--active': !!value }"
      v-bind="$attrs"
      :value="value"
      @change="updateValue"
    >
      <option v-for="item of items" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

interface Option {
  label: string
  value: string
}

export type Items = Array<Option>

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Items>,
      required: true,
    },
    label: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    value: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },
  emits: ['input'],
  setup(_, { emit }) {
    const updateValue = (event: InputEvent) => {
      emit('input', (event.target as HTMLSelectElement).value)
    }

    return {
      updateValue,
    }
  },
})
</script>

<style scoped>
.field__label {
  @apply ml-1 text-xl;
}

.field__input {
  @apply w-full mt-1 py-3 px-3 text-xl font-semibold rounded-xl bg-black;
  @apply bg-opacity-50 border border-transparent focus:border-turbo;
  @apply focus:bg-opacity-100 outline-none focus:shadow-lg;
  @apply transition-all ease-in duration-200 placeholder-gray-500;
}

.field__input--active {
  @apply border-turbo bg-opacity-100;
}
</style>
