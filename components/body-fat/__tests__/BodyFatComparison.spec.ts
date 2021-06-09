import { mount } from '@vue/test-utils'
import BodyFatComparison from '@/components/body-fat/BodyFatComparison.vue'
import { TBiologicalSex } from '@/types/biologicalSex'
import { BIOLOGICAL_SEX } from '@/constants/biologicalSex'

const { MALE, FEMALE } = BIOLOGICAL_SEX

const mountComponent = (biologicalSex: TBiologicalSex) =>
  mount(BodyFatComparison, {
    propsData: { biologicalSex },
  })

describe('BodyFatComparison', () => {
  it('should throw error if wrong "biologicalSex" is passed', () => {
    const wrapper = mountComponent(MALE)

    const isValidProp = (value: string) =>
      (wrapper.vm.$options.props as any).biologicalSex.validator(value)

    expect(isValidProp('X')).toBe(false)
  })

  it('should show the female comparison image when "biologicalSex" is "F"', () => {
    const wrapper = mountComponent(FEMALE)

    expect(wrapper.find('[src="bf-women.jpg"]').isVisible()).toBe(true)
  })

  it('should show the male comparison image when "biologicalSex" is "M"', () => {
    const wrapper = mountComponent(MALE)

    expect(wrapper.find('[src="bf-men.jpg"]').isVisible()).toBe(true)
  })
})
