import { mount } from '@vue/test-utils'
import AppLogo from '@/components/AppLogo.vue'

describe('AppLogo', () => {
  it('should mount component', () => {
    const wrapper = mount(AppLogo)

    expect(wrapper).toBeDefined()
    expect(wrapper.text()).toBe('Easy Body Calc')
  })
})
