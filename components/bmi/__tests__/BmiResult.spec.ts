import { mount } from '@vue/test-utils'
import BmiResult from '@/components/bmi/BmiResult.vue'
import { BMI_RESULTS } from '@/constants/bmi'

const { UNDERWEIGHT, NORMAL, OVERWEIGHT, OBESE, EXTREMELY_OBESE } = BMI_RESULTS

const mountComponent = (result: number) =>
  mount(BmiResult, {
    propsData: { result },
  })

describe('BmiResult', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent(20)

    expect(wrapper.vm).toBeDefined()
  })

  it('should display the result number with one decimal place', () => {
    const wrapper = mountComponent(22.5222)

    expect(wrapper.text()).toContain('22.5')
  })

  it('should display message "underweight" for result "17"', () => {
    const wrapper = mountComponent(17)

    expect(wrapper.text()).toContain(UNDERWEIGHT)
  })

  it('should display message "normal" for result "22"', () => {
    const wrapper = mountComponent(22)

    expect(wrapper.text()).toContain(NORMAL)
  })

  it('should display message "overweight" for result "27"', () => {
    const wrapper = mountComponent(27)

    expect(wrapper.text()).toContain(OVERWEIGHT)
  })

  it('should display message "obese" for result "33"', () => {
    const wrapper = mountComponent(33)

    expect(wrapper.text()).toContain(OBESE)
  })

  it('should display message "extremely obese" for result "38"', () => {
    const wrapper = mountComponent(38)

    expect(wrapper.text()).toContain(EXTREMELY_OBESE)
  })
})
