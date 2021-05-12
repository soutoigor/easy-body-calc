import { mount } from '@vue/test-utils'
import AppLogo from '@/components/common/AppLogo.vue'

describe('AppLogo', () => {
  it('should mount component', () => {
    const wrapper = mount(AppLogo)

    expect(wrapper.vm).toBeDefined()
  })

  it('should apply "small" style when "small" prop is passed', () => {
    const wrapper = mount(AppLogo, {
      propsData: {
        small: true,
      },
    })

    expect(wrapper.find('.logo__easy-body--small').exists()).toBe(true)
    expect(wrapper.find('.logo__calc--small').exists()).toBe(true)
  })
})
