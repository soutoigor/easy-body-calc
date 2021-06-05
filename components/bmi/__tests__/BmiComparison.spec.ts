import { mount } from '@vue/test-utils'
import BmiComparison from '@/components/bmi/BmiComparison.vue'

describe('BmiComparison', () => {
  it('should display the comparison values', () => {
    const wrapper = mount(BmiComparison)

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.text()).toContain('underweight')
    expect(wrapper.text()).toContain('<18.5')
    expect(wrapper.text()).toContain('normal')
    expect(wrapper.text()).toContain('18.5~2')
    expect(wrapper.text()).toContain('overweight')
    expect(wrapper.text()).toContain('25~29')
    expect(wrapper.text()).toContain('obese')
    expect(wrapper.text()).toContain('30~34')
    expect(wrapper.text()).toContain('extremely obese')
    expect(wrapper.text()).toContain('>35')
  })
})
