import { mount, RouterLinkStub } from '@vue/test-utils'
import Home from '@/pages/index.vue'
import AppLogo from '@/components/common/AppLogo.vue'
import AppButton from '@/components/common/AppButton.vue'
import { SITE_MAP } from '@/constants/siteMap'

const mountComponent = () =>
  mount(Home, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })

describe('Home', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
  })

  it('should display the AppLogo', () => {
    const wrapper = mountComponent()

    expect(wrapper.findComponent(AppLogo)).toBeTruthy()
  })

  it('should display buttons for all siteMap', () => {
    const wrapper = mountComponent()

    const siteMapList = Object.values(SITE_MAP)
    const links = wrapper.findAllComponents(RouterLinkStub)
    const buttons = wrapper.findAllComponents(AppButton)

    expect(buttons.length).toBe(siteMapList.length)

    siteMapList.forEach(({ url, label }, index) => {
      expect(links.at(index).props().to).toBe(url)
      expect(wrapper.text()).toContain(label)
    })
  })
})
