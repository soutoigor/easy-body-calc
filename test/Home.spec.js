import { mount } from '@vue/test-utils'
import Home from '@/pages/index.vue'

describe('Home', () => {
  test('should load Home properly', () => {
    const wrapper = mount(Home)
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.exists()).toBe(true)
  })
})
