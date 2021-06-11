<template>
  <!-- eslint-disable vue/no-v-html -->
  <div>
    <AppButton
      data-testid="open-modal"
      text
      color="primary"
      @click="setTipsModal(true)"
    >
      How to get the measures
    </AppButton>
    <AppModal v-show="tipsModal" @close="setTipsModal(false)">
      <template #title>How to get the measures</template>
      <template #content>
        <div data-testid="collapse">
          <AppCollapse
            v-for="{ TITLE, IMAGE, DESCRIPTION } of measureTips"
            :key="TITLE"
            :title="TITLE"
          >
            <img class="mx-auto mb-3 max-w-sm" :src="IMAGE" :alt="TITLE" />
            <p v-html="DESCRIPTION" />
          </AppCollapse>
        </div>
      </template>
    </AppModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import AppModal from '@/components/common/AppModal.vue'
import AppButton from '@/components/common/AppButton.vue'
import AppCollapse from '@/components/common/AppCollapse.vue'
import { MEASURE_TIPS } from '@/constants/measureTips'

export default defineComponent({
  name: 'MeasureTips',
  components: {
    AppButton,
    AppModal,
    AppCollapse,
  },
  setup() {
    const tipsModal = ref<boolean>(false)

    const setTipsModal = (value: boolean) => {
      tipsModal.value = value
    }

    return {
      tipsModal,
      setTipsModal,
      measureTips: Object.values(MEASURE_TIPS),
    }
  },
})
</script>
