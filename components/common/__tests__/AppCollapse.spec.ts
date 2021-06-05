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

  it('should toggle the display of the collapse content everytime header gets clicked', async () => {
    const content = 'Content text'
    const wrapper = mount(AppCollapse, {
      slots: {
        default: content,
      },
    })

    const header = wrapper.find('[data-testid="header"]')

    await header.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="content"]').exists()).toBe(true)
    expect(wrapper.text()).toContain(content)

    await header.trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.find('[data-testid="content"]').exists()).toBe(false)
    expect(wrapper.text()).not.toContain(content)
  })

  it('should set active class on header when collapse is open', async () => {
    const wrapper = mount(AppCollapse)

    const header = wrapper.find('[data-testid="header"]')

    await header.trigger('click')

    console.log(wrapper.html())

    expect(header.classes()).toContain('collapse__header--active')
    expect(header.classes()).toContain('collapse__icon--active')

    await header.trigger('click')

    expect(header.classes()).not.toContain('collapse__header--active')
    expect(header.classes()).not.toContain('collapse__icon--active')
  })
})
