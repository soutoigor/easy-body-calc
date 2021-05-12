<template>
  <ul class="flex flex-col justify-evenly md:flex-row items-center">
    <NuxtLink v-for="{ url, label } of siteMap" :key="url" :to="url">
      <li class="anchor-link" @click="$emit('navigate')">
        {{ label }}
      </li>
    </NuxtLink>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { siteMap } from '@/utils/siteMap'

export default defineComponent({
  emits: ['navigate'],
  setup() {
    return {
      siteMap: Object.values(siteMap),
    }
  },
})
</script>

<style scoped>
.anchor-link {
  @apply relative active:transform whitespace-nowrap scale-105 text-2xl md:text-lg lg:text-2xl capitalize;
}

.anchor-link:before {
  @apply absolute w-4 -bottom-1 right-0 bg-turbo transition-all ease-in-out duration-200;
  content: '';
  height: 2px;
}

.anchor-link:hover:before {
  @apply visible w-10/12;
}
</style>
