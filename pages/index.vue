<template>
  <div class="home">
    <div>
      <h1>
        <AppLogo />
      </h1>
      <h2 class="home__presentation-phrase">
        Know your body <strong>measures</strong>, create your
        <strong>diet</strong> and reach your <strong>goals</strong>.
        <br />#<strong>IIFYM</strong>
      </h2>
    </div>
    <div class="home__nav-container">
      <nav class="home__nav">
        <template v-for="page of siteMap">
          <NuxtLink :key="page.url" :to="page.url">
            <AppButton color="secondary" class="home__nav-button">
              {{ page.label }}
            </AppButton>
          </NuxtLink>
        </template>
      </nav>
      <h3 class="home__measure-phrase">
        “What gets <strong>measure</strong> gets <strong>managed</strong>.”
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AppLogo from '@/components/common/AppLogo.vue'
import AppButton from '@/components/common/AppButton.vue'
import { SITE_MAP } from '@/constants/siteMap'

export default defineComponent({
  components: {
    AppLogo,
    AppButton,
  },
  layout: 'home',
  setup() {
    return {
      siteMap: Object.values(SITE_MAP),
    }
  },
})
</script>

<style scoped>
.home {
  @apply flex px-6 flex-col lg:flex-row items-center justify-around;
  @apply lg:justify-around bg-home-mobile sm:bg-home-desktop min-h-screen;
}

.home__presentation-phrase {
  @apply italic text-lg sm:text-2xl mt-7;
}

.home__nav-container {
  @apply w-full lg:w-1/5;
}

.home__nav {
  @apply flex flex-col gap-3 sm:gap-6;
}

.home__nav-button {
  @apply text-xl sm:text-2xl;
}

.home__measure-phrase {
  @apply italic text-center lg:text-xl mt-7;
}
</style>
