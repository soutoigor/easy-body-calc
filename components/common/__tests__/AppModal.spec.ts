import { mount } from '@vue/test-utils'
import AppModal from '@/components/common/AppModal.vue'

describe('AppModal', () => {
  it('should mount the component', () => {
    const wrapper = mount(AppModal)

    expect(wrapper.vm).toBeTruthy()
  })

  it('should display title and content passed as slot', () => {
    const title = 'My title'
    const content = 'My content'

    const wrapper = mount(AppModal, {
      slots: {
        title,
        content,
      },
    })

    expect(wrapper.text()).toContain(title)
    expect(wrapper.text()).toContain(content)
  })

  it('should emit "close" when modal close button gets clicked', async () => {
    const wrapper = mount(AppModal)

    await wrapper.find('[data-testid="closeButton"]').trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
    expect(wrapper.emitted('close')!.length).toBe(1)
  })

  it('should emit "close" when modal backdrop gets clicked', async () => {
    const wrapper = mount(AppModal)

    await wrapper.find('[data-testid="backdrop"]').trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
    expect(wrapper.emitted('close')!.length).toBe(1)
  })
})
