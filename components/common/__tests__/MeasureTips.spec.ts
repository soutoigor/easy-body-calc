import { mount } from '@vue/test-utils'
import MeasureTips from '@/components/common/MeasureTips.vue'

describe('MeasureTips', () => {
  it('should mount the component', () => {
    const wrapper = mount(MeasureTips)

    expect(wrapper.vm).toBeTruthy()
  })

  it.todo(
    'should open the modal when "How to the the measures" button gets clicked'
  )
  it.todo('should close the modal on AppModal close')
  it.todo('should display all the measure tips list')
})
