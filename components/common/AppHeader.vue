<template>
  <header class="header">
    <NuxtLink to="/" class="flex-1">
      <AppLogo small />
    </NuxtLink>
    <button
      data-testid="open-menu"
      class="header__menu-button"
      @click="setIsDrawerOpen(true)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="header__icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <HeaderNavigation class="header__navigation" />
    <transition name="drawer">
      <div v-show="isDrawerOpen" data-testid="drawer" class="header__drawer">
        <button class="header__close-menu" @click="setIsDrawerOpen(false)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="header__icon"
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
        <HeaderNavigation
          class="header__mobile-navigation"
          @navigate="setIsDrawerOpen(false)"
        />
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import AppLogo from '@/components/common/AppLogo.vue'
import HeaderNavigation from '@/components/common/HeaderNavigation.vue'

export default defineComponent({
  name: 'AppHeader',
  components: {
    AppLogo,
    HeaderNavigation,
  },
  setup() {
    const isDrawerOpen = ref<boolean>(false)

    const setIsDrawerOpen = (value: boolean) => {
      isDrawerOpen.value = value
    }

    return {
      isDrawerOpen,
      setIsDrawerOpen,
    }
  },
})
</script>

<style scoped>
.header {
  @apply flex items-center justify-between h-24 md:h-36;
}

.header__menu-button {
  @apply md:hidden;
}

.header__icon {
  @apply h-12 w-12 text-turbo;
}

.header__navigation {
  @apply flex-1 hidden md:flex;
}

.header__drawer {
  @apply absolute right-0 h-screen top-0 w-screen bg-gray-700 shadow-2xl z-50;
}

.header__close-menu {
  @apply absolute right-5 top-5;
}

.header__mobile-navigation {
  @apply mt-10 h-1/2;
}

.drawer-leave-active,
.drawer-enter-active {
  @apply transition-all duration-500 ease-in-out;
}
.drawer-enter {
  @apply transform translate-x-96;
}
.drawer-leave-to {
  @apply transform translate-x-96;
}
</style>
