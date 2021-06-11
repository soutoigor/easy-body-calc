import { mount } from '@vue/test-utils'
import DailyMacrosResult from '@/components/daily-macros/DailyMacrosResult.vue'
import { TGoal, IDailyMacrosResult } from '@/types/dailyMacros'
import { GOALS } from '@/constants/dailyMacros'

const result: IDailyMacrosResult = {
  goal: GOALS.KEEP,
  fat: 65,
  protein: 130,
  carb: 200,
  calories: 2200,
}

const mountComponent = (goal: TGoal | null = null) =>
  mount(DailyMacrosResult, {
    propsData: {
      result: {
        ...result,
        goal: goal || result.goal,
      },
    },
  })

describe('DailyMacrosResult', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
  })

  it('should display the macros passed as props', () => {
    const wrapper = mountComponent()

    expect(wrapper.text()).toContain(result.goal)
    expect(wrapper.text()).toContain(result.fat)
    expect(wrapper.text()).toContain(result.carb)
    expect(wrapper.text()).toContain(result.protein)
    expect(wrapper.text()).toContain(result.calories)
  })

  it('should match right advice message for goal "KEEP"', () => {
    const wrapper = mountComponent(GOALS.KEEP)

    expect(wrapper.text()).toMatchSnapshot()
  })
  it('should match right advice message for goal "LOSE"', () => {
    const wrapper = mountComponent(GOALS.LOSE)

    expect(wrapper.text()).toMatchSnapshot()
  })
  it('should match right advice message for goal "GAIN"', () => {
    const wrapper = mountComponent(GOALS.GAIN)

    expect(wrapper.text()).toMatchSnapshot()
  })
})
