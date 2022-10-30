/* eslint-disable dot-notation */
import { mount } from '@vue/test-utils'
import GeneticPotentialForm from '@/components/genetic-potential/GeneticPotentialForm.vue'
import InputNumber from '@/components/common/InputNumber.vue'

describe('GeneticPotentialForm', () => {
  it('should mount the component GeneticPotentialForm', () => {
    const wrapper = mount(GeneticPotentialForm)

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.findAllComponents(InputNumber).length).toBe(4)
  })

  it('should disable "calculate" button if form is not filled', () => {
    const wrapper = mount(GeneticPotentialForm)

    expect(wrapper.vm['disabled']).toBe(true)

    wrapper.vm['form'].height = 158
    wrapper.vm['form'].ankle = 21
    wrapper.vm['form'].wrist = 15
    wrapper.vm['form'].bodyFat = 13

    expect(wrapper.vm['disabled']).toBe(false)
  })

  it('should emit "result" with the right Genetic Potential measures according with form values', async () => {
    const wrapper = mount(GeneticPotentialForm)

    wrapper.vm['form'].height = 158
    wrapper.vm['form'].ankle = 21
    wrapper.vm['form'].wrist = 15
    wrapper.vm['form'].bodyFat = 13

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('result')![0]).toStrictEqual([
      {
        calf: 40.36,
        chest: 109.39,
        foreArm: 30.7,
        neck: 38.37,
        thigh: 61.25,
        upperArm: 38.89,
        weight: 0,
      },
    ])
  })
})
