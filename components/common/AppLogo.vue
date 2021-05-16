<template>
  <div class="logo">
    <span
      class="logo__easy-body"
      :class="{ 'logo__easy-body--small': $props.small }"
    >
      Easy Body
    </span>
    <span class="logo__calc" :class="{ 'logo__calc--small': $props.small }">
      Calc
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppLogo',
  props: {
    small: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
})
</script>

<style scoped>
.logo {
  @apply flex flex-col font-black italic uppercase leading-none whitespace-nowrap;
}

.logo__easy-body {
  @apply text-5xl md:text-8xl tracking-tight;
}

.logo__easy-body--small {
  @apply text-lg md:text-3xl;
}

.logo__calc {
  @apply text-7xl text-right md:text-left md:text-9xl text-turbo tracking-wide;
}

.logo__calc--small {
  @apply text-4xl md:text-6xl text-left;
}
</style>
