/* eslint-disable dot-notation */
import { mount } from '@vue/test-utils'
import InputNumber from '@/components/common/InputNumber.vue'

describe('InputNumber', () => {
  it('should mount the component InputNumber', () => {
    const wrapper = mount(InputNumber)

    expect(wrapper.vm).toBeDefined()
  })

  it('should have "active" class only if has value', async () => {
    const wrapper = mount(InputNumber, {
      propsData: {
        value: null,
      },
    })

    const activeClass = 'field__input--active'

    expect(wrapper.find('input').classes()).not.toContain(activeClass)

    await wrapper.setProps({ value: 164 })

    expect(wrapper.find('input').classes()).toContain(activeClass)
  })

  it('should display label and input default value', () => {
    const label = 'Height'
    const value = 164

    const wrapper = mount(InputNumber, {
      propsData: {
        label,
        value,
      },
    })

    const inputField: HTMLInputElement = wrapper.find('input')
      .element as HTMLInputElement

    const inputValue = inputField.value

    expect(wrapper.text()).toContain(label)
    expect(inputValue).toBe(value.toString())
  })

  it('should emit "input" with the field value as type Number', async () => {
    const wrapper = mount(InputNumber)

    const value = 164

    await wrapper.find('input').setValue(value)

    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('input')![0]).toEqual([value])
  })
})
