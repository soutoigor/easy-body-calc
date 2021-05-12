<template>
  <div class="min-h-screen bg-charade text-white px-4 lg:px-12">
    <AppHeader />
    <main class="mt-6">
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
