import { mount } from '@vue/test-utils'
import BodyFatResult from '@/components/body-fat/BodyFatResult.vue'
import { IBodyFatResult } from '@/types/bodyFat'
import { BODY_FAT_RESULTS } from '@/constants/bodyFat'
import { BIOLOGICAL_SEX } from '@/constants/biologicalSex'

const { MALE, FEMALE } = BIOLOGICAL_SEX

const {
  COMPETITOR,
  VERY_GOOD,
  GOOD,
  IN_AVERAGE,
  ABOVE_AVERAGE,
  OBESE,
} = BODY_FAT_RESULTS

const mountComponent = (result: IBodyFatResult) =>
  mount(BodyFatResult, {
    propsData: { calcResult: result },
  })

describe('BodyFatResult', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent({ biologicalSex: MALE, result: 10 })

    expect(wrapper.vm).toBeDefined()
  })

  it('should display the result number with one decimal place', () => {
    const wrapper = mountComponent({ biologicalSex: MALE, result: 22.5222 })

    expect(wrapper.text()).toContain('22.5')
  })

  it('should display message "competitor" for result "5" for male', () => {
    const wrapper = mountComponent({ biologicalSex: MALE, result: 5 })

    expect(wrapper.text()).toContain(COMPETITOR)
  })

  it('should display message "competitor" for result "11" for female', () => {
    const wrapper = mountComponent({ biologicalSex: FEMALE, result: 11 })

    expect(wrapper.text()).toContain(COMPETITOR)
  })

  it('should display message "very good shape" for result "7" for male', () => {
    const wrapper = mountComponent({ biologicalSex: MALE, result: 7 })

    expect(wrapper.text()).toContain(VERY_GOOD)
  })

  it('should display message "very good shape" for result "13" for female', () => {
    const wrapper = mountComponent({ biologicalSex: FEMALE, result: 13 })

    expect(wrapper.text()).toContain(VERY_GOOD)
  })

  it('should display message "good shape" for result "13" for male', () => {
    const wrapper = mountComponent({ biologicalSex: MALE, result: 13 })

    expect(wrapper.text()).toContain(GOOD)
  })

  it('should display message "good shape" for result "17" for female', () => {
    const wrapper = mountComponent({ biologicalSex: FEMALE, result: 17 })

    expect(wrapper.text()).toContain(GOOD)
  })

  it('should display message "in average" for result "18" for male', () => {
    const wrapper = mountComponent({ biologicalSex: MALE, result: 18 })

    expect(wrapper.text()).toContain(IN_AVERAGE)
  })

  it('should display message "in average" for result "23" for female', () => {
    const wrapper = mountComponent({ biologicalSex: FEMALE, result: 23 })

    expect(wrapper.text()).toContain(IN_AVERAGE)
  })

  it('should display message "above average" for result "25" for male', () => {
    const wrapper = mountComponent({ biologicalSex: MALE, result: 25 })

    expect(wrapper.text()).toContain(ABOVE_AVERAGE)
  })

  it('should display message "above average" for result "29" for female', () => {
    const wrapper = mountComponent({ biologicalSex: FEMALE, result: 29 })

    expect(wrapper.text()).toContain(ABOVE_AVERAGE)
  })

  it('should display message "obese" for result "27" for male', () => {
    const wrapper = mountComponent({ biologicalSex: MALE, result: 27 })

    expect(wrapper.text()).toContain(OBESE)
  })

  it('should display message "obese" for result "31" for female', () => {
    const wrapper = mountComponent({ biologicalSex: FEMALE, result: 31 })

    expect(wrapper.text()).toContain(OBESE)
  })
})
