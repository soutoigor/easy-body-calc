import { mount } from '@vue/test-utils'
import AppCollapse from '@/components/common/AppCollapse.vue'

describe('AppCollapse', () => {
  it('should mount the component', () => {
    const wrapper = mount(AppCollapse)

    expect(wrapper.vm).toBeTruthy()
  })

  it('should display the title passed as prop', () => {
    const title = 'Header title'
    const wrapper = mount(AppCollapse, {
      propsData: {
        title,
      },
    })

    expect(wrapper.text()).toContain(title)
  })
})
