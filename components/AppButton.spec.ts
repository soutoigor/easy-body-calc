import { mount } from '@vue/test-utils'
import AppButton from '@/components/AppButton.vue'

describe('AppButton', () => {
  it('should mount the component AppButton', () => {
    const wrapper = mount(AppButton)

    expect(wrapper.vm).toBeDefined()
  })

  it('should display the button text passed as slot', () => {
    const BUTTON_TEXT = 'my button'
    const wrapper = mount(AppButton, {
      slots: {
        default: BUTTON_TEXT,
      },
    })

    expect(wrapper.text()).toBe(BUTTON_TEXT)
  })

  it('should use the style class according with the prop color', async () => {
    const FIRST_CLASS = 'primary'
    const SECOND_CLASS = 'secondary'
    const wrapper = mount(AppButton, {
      propsData: {
        color: FIRST_CLASS,
      },
    })

    expect(wrapper.classes()).toContain(FIRST_CLASS)

    await wrapper.setProps({ color: SECOND_CLASS })

    expect(wrapper.classes()).toContain(SECOND_CLASS)
  })

  it('should throw error if invalid color is passed', () => {
    const wrapper = mount(AppButton)

    const isValidProp = (value: string) =>
      (wrapper.vm.$options.props as any).color.validator(value)

    expect(isValidProp('invalid-color')).toBe(false)
  })
})
