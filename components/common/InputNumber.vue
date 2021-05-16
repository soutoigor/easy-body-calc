<template>
  <div>
    <label class="field__label" for="input">{{ label }}</label>
    <input
      id="input"
      type="text"
      class="field__input"
      :class="{ 'field__input--active': !!value }"
      autocomplete="off"
      v-bind="$attrs"
      :value="value"
      @keydown.space.prevent
      @keypress="isNumber"
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
    const stringToNumber = (fieldValue: string) =>
      Number(fieldValue.replace(/\D/g, ''))

    const isNumber = (event: KeyboardEvent) => {
      if (Number(event.key) >= 0) return
      event.preventDefault()
    }

    const updateValue = (event: InputEvent) => {
      const formattedField = stringToNumber((<HTMLInputElement>event.target).value)

      emit('input', formattedField)
    }

    return {
      isNumber,
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
  @apply w-full mt-1 py-3 px-3 text-xl font-semibold rounded-xl bg-black
  bg-opacity-50 border border-transparent focus:border-turbo
  focus:bg-opacity-100 outline-none focus:shadow-lg
  transition-all ease-in duration-200 placeholder-gray-500;
}

.field__input--active {
  @apply border-turbo bg-opacity-100;
}
</style>
