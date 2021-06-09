import { mount } from '@vue/test-utils'
import BmiComparison from '@/components/bmi/BmiComparison.vue'
import { BMI_RESULTS } from '@/constants/bmi'

const { UNDERWEIGHT, NORMAL, OVERWEIGHT, OBESE, EXTREMELY_OBESE } = BMI_RESULTS

describe('BmiComparison', () => {
  it('should display the comparison values', () => {
    const wrapper = mount(BmiComparison)

    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.text()).toContain(UNDERWEIGHT)
    expect(wrapper.text()).toContain('<18.5')
    expect(wrapper.text()).toContain(NORMAL)
    expect(wrapper.text()).toContain('18.5~2')
    expect(wrapper.text()).toContain(OVERWEIGHT)
    expect(wrapper.text()).toContain('25~29')
    expect(wrapper.text()).toContain(OBESE)
    expect(wrapper.text()).toContain('30~34')
    expect(wrapper.text()).toContain(EXTREMELY_OBESE)
    expect(wrapper.text()).toContain('>35')
  })
})
