import { mount, RouterLinkStub } from '@vue/test-utils'
import HeaderNavigation from '@/components/common/HeaderNavigation.vue'
import { SITE_MAP } from '@/constants/siteMap'

const mountComponent = () =>
  mount(HeaderNavigation, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })

describe('HeaderNavigation', () => {
  it('should mount component', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
  })

  it('should display links for all siteMap', () => {
    const wrapper = mountComponent()

    const siteMapList = Object.values(SITE_MAP)
    const links = wrapper.findAllComponents(RouterLinkStub)
    const buttons = wrapper.findAll('li')

    expect(buttons.length).toBe(siteMapList.length)

    siteMapList.forEach(({ url, label }, index) => {
      expect(links.at(index).props().to).toBe(url)
      expect(wrapper.text()).toContain(label)
    })
  })

  it('should emit "navigate" on link click', async () => {
    const wrapper = mountComponent()

    const link = wrapper.findAll('li').at(0)

    await link.trigger('click')

    expect(wrapper.emitted('navigate')).toBeTruthy()
  })
})
