<template>
  <section class="collapse">
    <header
      class="collapse__header"
      :class="{ 'collapse__header--active': active }"
      @click="toggleActive"
    >
      <h1>{{ title }}</h1>
      <svg
        class="collapse__icon"
        :class="{ 'collapse__icon--active': active }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </header>
    <transition name="expand">
      <main v-if="active" class="collapse__content">
        <slot />
      </main>
    </transition>
  </section>
</template>

<script lang="ts">
import { ref, PropType, defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: false,
      default: '',
    },
  },
  setup() {
    const active = ref<boolean>(false)

    const toggleActive = () => {
      active.value = !active.value
    }

    return {
      active,
      toggleActive,
    }
  },
})
</script>

<style scoped>
.collapse {
  @apply shadow-md;
}

.collapse__header {
  @apply bg-gray-400 border border-black rounded-lg text-gray-900 text-xl font-semibold;
  @apply flex justify-between items-center cursor-pointer p-3;
}

.collapse__header--active {
  @apply rounded-b-none border-b-0;
}

.collapse__content {
  @apply p-3 bg-gray-200 text-gray-900 text-lg rounded-b-lg;
  @apply border border-black border-t-0;
}

.collapse__icon {
  @apply h-6 w-6;
}

.collapse__icon--active {
  @apply transform rotate-180 transition ease-linear duration-300;
}

.expand-leave-active,
.expand-enter-active {
  @apply transition-all duration-100 ease-linear;
}
.expand-enter {
  @apply opacity-0 transform -translate-y-8;
}
.expand-leave-to {
  @apply opacity-0 transform -translate-y-5;
}
</style>
