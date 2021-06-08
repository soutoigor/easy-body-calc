/* eslint-disable dot-notation */
import { mount } from '@vue/test-utils'
import BodyFatForm from '@/components/body-fat/BodyFatForm.vue'
import InputNumber from '@/components/common/InputNumber.vue'
import InputSelect from '@/components/common/InputSelect.vue'
import AppButton from '@/components/common/AppButton.vue'
import { BodyFat } from './../interface'

describe('BodyFatForm', () => {
  it('should mount the component BodyFatForm', () => {
    const wrapper = mount(BodyFatForm)

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.findAllComponents(InputNumber).length).toBe(4)
    expect(wrapper.findComponent(InputSelect).exists()).toBe(true)
    expect(wrapper.findComponent(AppButton).exists()).toBe(true)
  })

  it('should disable "calculate" button if form is not filled correctly', async () => {
    const wrapper = mount(BodyFatForm)

    expect(wrapper.vm['disabled']).toBe(true)

    const form: BodyFat = {
      height: 30,
      abdomen: 30,
      neck: 30,
      biologicalSex: 'F',
      hip: 30,
    }

    wrapper.vm['form'].height = form.height
    wrapper.vm['form'].abdomen = form.abdomen
    wrapper.vm['form'].neck = form.neck
    wrapper.vm['form'].biologicalSex = form.biologicalSex
    wrapper.vm['form'].hip = form.hip

    expect(wrapper.vm['disabled']).toBe(false)

    form.biologicalSex = 'M'
    form.hip = 0

    wrapper.vm['form'].biologicalSex = form.biologicalSex
    wrapper.vm['form'].hip = form.hip

    expect(wrapper.vm['disabled']).toBe(false)
  })

  it('should emit "result" with the right Body Fat according with form values form male', async () => {
    const wrapper = mount(BodyFatForm)

    const form: BodyFat = {
      height: 164,
      abdomen: 75,
      neck: 34,
      biologicalSex: 'M',
      hip: 0,
    }

    wrapper.vm['form'].height = form.height
    wrapper.vm['form'].abdomen = form.abdomen
    wrapper.vm['form'].neck = form.neck
    wrapper.vm['form'].biologicalSex = form.biologicalSex

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('result')![0]).toStrictEqual([
      {
        biologicalSex: form.biologicalSex,
        result: 13.885661555355643,
      },
    ])
  })

  it('should emit "result" with the right Body Fat according with form values form female', async () => {
    const wrapper = mount(BodyFatForm)

    const form: BodyFat = {
      height: 164,
      abdomen: 75,
      neck: 34,
      biologicalSex: 'F',
      hip: 100,
    }

    wrapper.vm['form'].height = form.height
    wrapper.vm['form'].abdomen = form.abdomen
    wrapper.vm['form'].neck = form.neck
    wrapper.vm['form'].biologicalSex = form.biologicalSex
    wrapper.vm['form'].hip = form.hip

    await wrapper.find('form').trigger('submit')

    expect(wrapper.emitted('result')![0]).toStrictEqual([
      {
        biologicalSex: form.biologicalSex,
        result: 29.49649882822993,
      },
    ])
  })
})
