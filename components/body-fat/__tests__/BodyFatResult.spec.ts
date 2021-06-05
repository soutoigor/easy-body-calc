import { mount } from '@vue/test-utils'
import BodyFatResult from '@/components/body-fat/BodyFatResult.vue'
import { Result } from './../interface'

const mountComponent = (result: Result) =>
  mount(BodyFatResult, {
    propsData: { calcResult: result },
  })

describe('BodyFatResult', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent({ biologicalSex: 'M', result: 10 })

    expect(wrapper.vm).toBeDefined()
  })

  it('should display the result number with one decimal place', () => {
    const wrapper = mountComponent({ biologicalSex: 'M', result: 22.5222 })

    expect(wrapper.text()).toContain('22.5')
  })

  it('should display message "competitor" for result "5" for male', () => {
    const wrapper = mountComponent({ biologicalSex: 'M', result: 5 })

    expect(wrapper.text()).toContain('competitor')
  })

  it('should display message "competitor" for result "11" for female', () => {
    const wrapper = mountComponent({ biologicalSex: 'F', result: 11 })

    expect(wrapper.text()).toContain('competitor')
  })

  it('should display message "very good shape" for result "7" for male', () => {
    const wrapper = mountComponent({ biologicalSex: 'M', result: 7 })

    expect(wrapper.text()).toContain('very good shape')
  })

  it('should display message "very good shape" for result "13" for female', () => {
    const wrapper = mountComponent({ biologicalSex: 'F', result: 13 })

    expect(wrapper.text()).toContain('very good shape')
  })

  it('should display message "good shape" for result "13" for male', () => {
    const wrapper = mountComponent({ biologicalSex: 'M', result: 13 })

    expect(wrapper.text()).toContain('good shape')
  })

  it('should display message "good shape" for result "17" for female', () => {
    const wrapper = mountComponent({ biologicalSex: 'F', result: 17 })

    expect(wrapper.text()).toContain('good shape')
  })

  it('should display message "in average" for result "18" for male', () => {
    const wrapper = mountComponent({ biologicalSex: 'M', result: 18 })

    expect(wrapper.text()).toContain('in average')
  })

  it('should display message "in average" for result "23" for female', () => {
    const wrapper = mountComponent({ biologicalSex: 'F', result: 23 })

    expect(wrapper.text()).toContain('in average')
  })

  it('should display message "above average" for result "25" for male', () => {
    const wrapper = mountComponent({ biologicalSex: 'M', result: 25 })

    expect(wrapper.text()).toContain('above average')
  })

  it('should display message "above average" for result "29" for female', () => {
    const wrapper = mountComponent({ biologicalSex: 'F', result: 29 })

    expect(wrapper.text()).toContain('above average')
  })

  it('should display message "obese" for result "27" for male', () => {
    const wrapper = mountComponent({ biologicalSex: 'M', result: 27 })

    expect(wrapper.text()).toContain('obese')
  })

  it('should display message "obese" for result "31" for female', () => {
    const wrapper = mountComponent({ biologicalSex: 'F', result: 31 })

    expect(wrapper.text()).toContain('obese')
  })
})
