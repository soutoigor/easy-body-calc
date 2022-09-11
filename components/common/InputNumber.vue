<template>
  <div>
    <label class="field__label" for="input">{{ label }}</label>
    <input
      id="input"
      class="field__input"
      :class="{ 'field__input--active': !!value }"
      autocomplete="off"
      v-bind="$attrs"
      :value="value || ''"
      type="number"
      pattern="^\d*(\.\d{0,2})?$"
      step=".01"
      @keydown.space.prevent
      @input="updateValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'InputNumber',
  props: {
    label: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
    value: {
      type: Number as PropType<number>,
      required: false,
      default: null,
    },
  },
  emits: ['input'],
  setup(_, { emit }) {
    const updateValue = (event: InputEvent) => {
      emit('input', Number((event.target as HTMLInputElement).value))
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
