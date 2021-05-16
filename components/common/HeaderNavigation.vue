<template>
  <ul class="flex flex-col justify-evenly md:flex-row items-center">
    <NuxtLink v-for="{ url, label } of siteMap" :key="url" :to="url">
      <li
        class="anchor-link"
        :class="{ 'anchor-link--active': isActualRoute(url) }"
        @click="$emit('navigate')"
      >
        {{ label }}
      </li>
    </NuxtLink>
  </ul>
</template>

<script lang="ts">
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import { siteMap } from '@/utils/siteMap'

export default defineComponent({
  name: 'HeaderNavigation',
  emits: ['navigate'],
  setup() {
    const route = useRoute()

    const isActualRoute = (url: string) => route.value?.path === url

    return {
      siteMap: Object.values(siteMap),
      isActualRoute,
    }
  },
})
</script>

<style scoped>
.anchor-link {
  @apply relative active:transform whitespace-nowrap scale-105 text-2xl md:text-lg lg:text-2xl capitalize;
}

.anchor-link:before, .anchor-link--active:before {
  @apply absolute w-4 -bottom-1 right-0 bg-turbo transition-all ease-in-out duration-200;
  content: '';
  height: 2px;
}

.anchor-link:hover:before, .anchor-link--active:before {
  @apply visible w-10/12;
}

.anchor-link--active {
  @apply text-turbo;
}
</style>
