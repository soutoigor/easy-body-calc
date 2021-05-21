<template>
  <transition name="modal">
    <div class="modal__backdrop" @click.self="emitClose">
      <article
        class="modal__container"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal__header">
          <h1 class="modal__title">
            <slot name="title" />
          </h1>
          <button class="modal__close" @click="emitClose">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="modal__close-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </header>
        <main class="modal__content">
          <slot name="content" />
        </main>
      </article>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppModal',
  emits: ['close'],
  setup(_, { emit }) {
    const emitClose = () => {
      emit('close')
    }

    return {
      emitClose,
    }
  },
})
</script>

<style scoped>
.modal__backdrop {
 @apply fixed z-50 top-0 bottom-0 left-0 right-0 bg-gray-900 bg-opacity-60;
 @apply flex justify-center items-center;
}

.modal__container {
  @apply rounded-lg bg-gray-700 w-full md:w-1/2 p-5 max-h-screen overflow-y-auto;
  @apply flex flex-col gap-6;
}

.modal__header {
  @apply flex justify-between items-center;
}

.modal__title {
  @apply flex-1 text-xl md:text-3xl font-semibold;
}

.modal__close {
  @apply w-9 h-9 cursor-pointer;
}

.modal__close-icon {
  @apply text-turbo text-xl;
}

.modal-enter,
.modal-leave-active {
  @apply opacity-0 -top-3;
}

.modal-enter-active,
.modal-leave-active {
  @apply transition-all duration-300;
}
</style>
