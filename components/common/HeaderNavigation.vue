<template>
  <ul class="navigation">
    <NuxtLink v-for="{ url, label } of siteMap" :key="url" :to="url">
      <li
        class="navigation__link"
        :class="{ 'navigation__link--active': isActualRoute(url) }"
        @click="$emit('navigate')"
      >
        {{ label }}
      </li>
    </NuxtLink>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SITE_MAP } from '@/constants/siteMap'
import { useRoute } from '@/router'

export default defineComponent({
  name: 'HeaderNavigation',
  emits: ['navigate'],
  setup() {
    const route = useRoute()

    const isActualRoute = (url: string) => route.value?.path === url

    return {
      siteMap: Object.values(SITE_MAP),
      isActualRoute,
    }
  },
})
</script>

<style scoped>
.navigation {
  @apply flex flex-col justify-evenly md:flex-row items-center;
}

.navigation__link {
  @apply relative active:transform whitespace-nowrap scale-105 text-2xl md:text-lg lg:text-2xl capitalize;
}

.navigation__link:before {
  @apply absolute w-4 -bottom-1 right-0 bg-turbo transition-all ease-in-out duration-200;
  content: '';
  height: 2px;
}

.navigation__link:hover:before,
.navigation__link.navigation__link--active:before {
  @apply visible w-10/12;
}

.navigation__link.navigation__link--active {
  @apply text-turbo;
}
</style>
