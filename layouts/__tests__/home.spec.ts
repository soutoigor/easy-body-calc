import { mount, RouterLinkStub } from '@vue/test-utils'
import HomeLayout from '@/layouts/home.vue'

describe('DefaultLayout', () => {
  it('should mount the component', () => {
    const wrapper = mount(HomeLayout, {
      stubs: {
        Nuxt: true,
        NuxtLink: RouterLinkStub,
      },
    })

    expect(wrapper.vm).toBeDefined()
  })
})
