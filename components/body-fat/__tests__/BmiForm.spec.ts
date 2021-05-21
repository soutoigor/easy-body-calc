/* eslint-disable dot-notation */
import { mount } from '@vue/test-utils'
import BmiForm from '@/components/bmi/BmiForm.vue'
import InputNumber from '@/components/common/InputNumber.vue'

describe('BmiForm', () => {
  it('should mount the component BmiForm', () => {
    const wrapper = mount(BmiForm)

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.findAllComponents(InputNumber).length).toBe(2)
  })

  it('should disable "calculate" button if form is not filled', () => {
    const wrapper = mount(BmiForm)

    expect(wrapper.vm['disabled']).toBe(true)

    wrapper.vm['form'].height = 30
    wrapper.vm['form'].weight = 30

    expect(wrapper.vm['disabled']).toBe(false)
  })

  it('should emit "result" with the right BMI according with form values', async () => {
    const wrapper = mount(BmiForm)

    wrapper.vm['form'].height = 164
    wrapper.vm['form'].weight = 70

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('result')![0]).toStrictEqual([26.026174895895302])
  })

  it('should emit "result" with 0 if form values is not valid', async () => {
    const wrapper = mount(BmiForm)

    wrapper.vm['form'].height = 0
    wrapper.vm['form'].weight = 0

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('result')![0]).toStrictEqual([0])
  })
})
