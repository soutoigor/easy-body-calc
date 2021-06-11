import { mount } from '@vue/test-utils'
import DailyCaloriesResult from '@/components/daily-calories/DailyCaloriesResult.vue'
import { IDailyCaloriesResult } from '@/types/dailyCalories'

const result: IDailyCaloriesResult = {
  calories: 2200,
  bmr: 1750,
}

describe('DailyCaloriesResult', () => {
  it('should display BMR and Calories passed by props', () => {
    const wrapper = mount(DailyCaloriesResult, {
      propsData: {
        calcResult: result,
      },
    })

    expect(wrapper.text()).toContain(result.calories)
    expect(wrapper.text()).toContain(result.bmr)
  })
})
