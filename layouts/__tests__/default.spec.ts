import { mount, RouterLinkStub } from '@vue/test-utils'
import DefaultLayout from '@/layouts/default.vue'
import AppHeader from '@/components/common/AppHeader.vue'

describe('DefaultLayout', () => {
  it('should mount the component', () => {
    const wrapper = mount(DefaultLayout, {
      stubs: {
        Nuxt: true,
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.findComponent(AppHeader)).toBeTruthy()
  })
})
