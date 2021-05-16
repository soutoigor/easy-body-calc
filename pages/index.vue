<template>
  <div
    class="flex px-6 flex-col lg:flex-row items-center justify-around lg:justify-around bg-home-mobile sm:bg-home-desktop min-h-screen"
  >
    <div>
      <h1>
        <AppLogo />
      </h1>
      <h2 class="italic text-lg sm:text-2xl mt-7">
        Know your body <strong>measures</strong>, create your
        <strong>diet</strong> and reach your <strong>goals</strong>.
        <br />#<strong>IIFYM</strong>
      </h2>
    </div>
    <div class="w-full lg:w-1/5">
      <nav class="flex flex-col gap-3 sm:gap-6">
        <template v-for="page of siteMap">
          <NuxtLink :key="page.url" :to="page.url">
            <AppButton color="secondary" class="text-xl sm:text-2xl">
              {{ page.label }}
            </AppButton>
          </NuxtLink>
        </template>
      </nav>
      <h3 class="italic text-center lg:text-xl mt-7">
        “What gets <strong>measure</strong> gets <strong>managed</strong>.”
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppLogo from '@/components/common/AppLogo.vue'
import AppButton from '@/components/common/AppButton.vue'
import { siteMap } from '@/utils/siteMap'

export default defineComponent({
  components: {
    AppLogo,
    AppButton,
  },
  layout: 'home',
  setup() {
    return {
      siteMap: Object.values(siteMap),
    }
  },
})
</script>
