<template>
  <div class="min-h-screen bg-charade text-white px-4 lg:px-12">
    <AppHeader />
    <main
      class="flex flex-col pt-6 lg:pt-14 justify-around gap-20 lg:gap-52 lg:flex-row"
    >
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppHeader from '@/components/common/AppHeader.vue'

export default defineComponent({
  components: {
    AppHeader,
  },
})
</script>
