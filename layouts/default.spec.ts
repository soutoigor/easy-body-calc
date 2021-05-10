import { mount } from '@vue/test-utils'
import DefaultLayout from '@/layouts/default.vue'

describe('DefaultLayout', () => {
  it('should mount the component', () => {
    const wrapper = mount(DefaultLayout, {
      stubs: {
        Nuxt: true,
      },
    })

    expect(wrapper.vm).toBeDefined()
  })
})
