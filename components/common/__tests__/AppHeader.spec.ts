import { mount, RouterLinkStub } from '@vue/test-utils'
import AppHeader from '@/components/common/AppHeader.vue'
import HeaderNavigation from '@/components/common/HeaderNavigation.vue'

const mountComponent = () =>
  mount(AppHeader, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })

describe('AppHeader', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.findAllComponents(HeaderNavigation).exists()).toBe(true)
  })

  it('should display drawer when "open-menu" button is clicked', async () => {
    const wrapper = mountComponent()

    await wrapper.find('[data-testid="open-menu"]').trigger('click')

    expect(wrapper.find('[data-testid="drawer"]').isVisible()).toBe(true)
  })

  it('should hide drawer when a link is clicked', async () => {
    const wrapper = mountComponent()

    await wrapper.find('[data-testid="open-menu"]').trigger('click')

    wrapper.findAllComponents(HeaderNavigation).at(1).vm.$emit('navigate')

    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="drawer"]').isVisible()).toBe(false)
  })
})
