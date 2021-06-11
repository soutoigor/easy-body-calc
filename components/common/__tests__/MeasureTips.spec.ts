import { mount } from '@vue/test-utils'
import MeasureTips from '@/components/common/MeasureTips.vue'
import AppModal from '@/components/common/AppModal.vue'
import { MEASURE_TIPS } from '@/constants/measureTips'

describe('MeasureTips', () => {
  it('should mount the component', () => {
    const wrapper = mount(MeasureTips)

    expect(wrapper.vm).toBeTruthy()
  })

  it('should open the modal when "How to get the measures" button gets clicked', async () => {
    const wrapper = mount(MeasureTips)

    await wrapper.find('[data-testid="open-modal"]').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="collapse"]').isVisible()).toBe(true)
  })

  it('should close the modal on AppModal close', async () => {
    const wrapper = mount(MeasureTips)

    await wrapper.find('[data-testid="open-modal"]').trigger('click')

    await wrapper.vm.$nextTick()

    wrapper.findComponent(AppModal).vm.$emit('close')

    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="collapse"]').isVisible()).toBe(false)
  })

  it('should display all the measure tips list', async () => {
    const wrapper = mount(MeasureTips)

    await wrapper.find('[data-testid="open-modal"]').trigger('click')

    await wrapper.vm.$nextTick()

    Object.values(MEASURE_TIPS).forEach(({ TITLE }) => {
      expect(wrapper.find('[data-testid="collapse"]').text()).toContain(TITLE)
    })
  })
})
