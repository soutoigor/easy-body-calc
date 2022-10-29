<template>
  <div v-frag>
    <section class="genetic-potential">
      <h2 class="genetic-potential__title">
        Calculate genetic potential bellow:
      </h2>
    </section>
    <aside class="explanation-section">
      <AppExplanation>
        <template #title>GENETIC POTENTIAL</template>
        <template #content>
          <p>
            Created by Dr. Casey Butt, who is a life-long student of natural
            bodybuilding, the <b>Genetic Potential</b> is a trusted way to see
            your possible measures based on your biotype.
          </p>
          <p>
            You can choose the
            <NuxtLink
              class="explanation-section__link"
              :to="SITE_MAP.BODY_FAT.url"
              >Body Fat</NuxtLink
            >
            that you want to achieve and maintain for your
            <b>genetic potential</b> and see how much of muscle you can keep for
            each measure, with that body fat, like arms, chest, legs, etc.
          </p>
          <p>
            So you can set it as a milestone, train hard, follow your
            <NuxtLink
              class="explanation-section__link"
              :to="SITE_MAP.MACROS.url"
              >diet</NuxtLink
            >, doing bulkings and cuttings according with your
            <NuxtLink
              class="explanation-section__link"
              :to="SITE_MAP.BODY_FAT.url"
              >Body Fat</NuxtLink
            >, and patiently you will get there :)
          </p>
        </template>
      </AppExplanation>
    </aside>
  </div>
</template>

<script lang="ts">
import AppExplanation from '@/components/common/AppExplanation.vue'
import { defineComponent } from '@nuxtjs/composition-api'
import frag from 'vue-frag'
import { SITE_MAP } from '@/constants/siteMap'

export default defineComponent({
  name: 'GeneticPotential',
  components: {
    AppExplanation,
  },
  directives: { frag },
  setup() {
    return {
      SITE_MAP,
    }
  },
})
</script>

<style scoped>
.genetic-potential {
  @apply w-full lg:w-1/3;
}

.genetic-potential__title {
  @apply mb-4 text-2xl font-bold;
}

.explanation-section {
  @apply flex justify-center lg:w-1/3;
}

.explanation-section__link {
  @apply text-turbo font-semibold text-lg underline;
}
</style>
