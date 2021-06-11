/* eslint-disable dot-notation */
import { mount } from '@vue/test-utils'
import DailyCaloriesForm from '@/components/daily-calories/DailyCaloriesForm.vue'
import InputNumber from '@/components/common/InputNumber.vue'
import InputSelect from '@/components/common/InputSelect.vue'
import AppButton from '@/components/common/AppButton.vue'
import { IDailyCalories, IDailyCaloriesResult } from '@/types/dailyCalories'
import { BIOLOGICAL_SEX } from '@/constants/biologicalSex'
import { ACTIVITY } from '@/constants/dailyCalories'

const { MALE, FEMALE } = BIOLOGICAL_SEX

const {
  SEDENTARY,
  SLIGHTLY,
  MODERATELY,
  ACTIVE,
  VERY,
} = ACTIVITY

describe('DailyCaloriesForm', () => {
  it('should mount the component DailyCaloriesForm', () => {
    const wrapper = mount(DailyCaloriesForm)

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.findAllComponents(InputNumber).length).toBe(3)
    expect(wrapper.findAllComponents(InputSelect).length).toBe(2)
    expect(wrapper.findComponent(AppButton).exists()).toBe(true)
  })

  it('should disable "calculate" button if form is not filled correctly', () => {
    const wrapper = mount(DailyCaloriesForm)

    expect(wrapper.vm['disabled']).toBe(true)

    const form: IDailyCalories = {
      height: 50,
      weight: 50,
      age: 50,
      biologicalSex: MALE,
      activity: SEDENTARY,
    }

    wrapper.vm['form'].height = form.height
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].age = form.age
    wrapper.vm['form'].biologicalSex = form.biologicalSex
    wrapper.vm['form'].activity = form.activity

    expect(wrapper.vm['disabled']).toBe(false)
  })

  it('should emit "result" with the right calories according with "MALE" for SEDENTARY', async () => {
    const wrapper = mount(DailyCaloriesForm)

    const form: IDailyCalories = {
      height: 164,
      weight: 73,
      age: 23,
      biologicalSex: MALE,
      activity: SEDENTARY,
    }

    wrapper.vm['form'].height = form.height
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].age = form.age
    wrapper.vm['form'].biologicalSex = form.biologicalSex
    wrapper.vm['form'].activity = form.activity

    await wrapper.find('form').trigger('submit')

    const result: IDailyCaloriesResult = {
      bmr: 1722.8080000000002,
      calories: 2067.3696,
    }

    expect(wrapper.emitted('result')![0]).toStrictEqual([result])
  })

  it('should emit "result" with the right calories according with "FEMALE" for SEDENTARY', async () => {
    const wrapper = mount(DailyCaloriesForm)

    const form: IDailyCalories = {
      height: 164,
      weight: 73,
      age: 23,
      biologicalSex: FEMALE,
      activity: SEDENTARY,
    }

    wrapper.vm['form'].height = form.height
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].age = form.age
    wrapper.vm['form'].biologicalSex = form.biologicalSex
    wrapper.vm['form'].activity = form.activity

    await wrapper.find('form').trigger('submit')

    const result: IDailyCaloriesResult = {
      bmr: 1531.106,
      calories: 1837.3272,
    }

    expect(wrapper.emitted('result')![0]).toStrictEqual([result])
  })

  it('should emit "result" with the right calories for "Slightly active" activity', async () => {
    const wrapper = mount(DailyCaloriesForm)

    const form: IDailyCalories = {
      height: 164,
      weight: 73,
      age: 23,
      biologicalSex: FEMALE,
      activity: SLIGHTLY,
    }

    wrapper.vm['form'].height = form.height
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].age = form.age
    wrapper.vm['form'].biologicalSex = form.biologicalSex
    wrapper.vm['form'].activity = form.activity

    await wrapper.find('form').trigger('submit')

    const result: IDailyCaloriesResult = {
      bmr: 1531.106,
      calories: 2105.27075,
    }

    expect(wrapper.emitted('result')![0]).toStrictEqual([result])
  })

  it('should emit "result" with the right calories for "Moderately active" activity', async () => {
    const wrapper = mount(DailyCaloriesForm)

    const form: IDailyCalories = {
      height: 164,
      weight: 73,
      age: 23,
      biologicalSex: FEMALE,
      activity: MODERATELY,
    }

    wrapper.vm['form'].height = form.height
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].age = form.age
    wrapper.vm['form'].biologicalSex = form.biologicalSex
    wrapper.vm['form'].activity = form.activity

    await wrapper.find('form').trigger('submit')

    const result: IDailyCaloriesResult = {
      bmr: 1531.106,
      calories: 2373.2143,
    }

    expect(wrapper.emitted('result')![0]).toStrictEqual([result])
  })

  it('should emit "result" with the right calories for "Active" activity', async () => {
    const wrapper = mount(DailyCaloriesForm)

    const form: IDailyCalories = {
      height: 164,
      weight: 73,
      age: 23,
      biologicalSex: FEMALE,
      activity: ACTIVE,
    }

    wrapper.vm['form'].height = form.height
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].age = form.age
    wrapper.vm['form'].biologicalSex = form.biologicalSex
    wrapper.vm['form'].activity = form.activity

    await wrapper.find('form').trigger('submit')

    const result: IDailyCaloriesResult = {
      bmr: 1531.106,
      calories: 2641.15785,
    }

    expect(wrapper.emitted('result')![0]).toStrictEqual([result])
  })

  it('should emit "result" with the right calories for "Very active" activity', async () => {
    const wrapper = mount(DailyCaloriesForm)

    const form: IDailyCalories = {
      height: 164,
      weight: 73,
      age: 23,
      biologicalSex: FEMALE,
      activity: VERY,
    }

    wrapper.vm['form'].height = form.height
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].age = form.age
    wrapper.vm['form'].biologicalSex = form.biologicalSex
    wrapper.vm['form'].activity = form.activity

    await wrapper.find('form').trigger('submit')

    const result: IDailyCaloriesResult = {
      bmr: 1531.106,
      calories: 2909.1014,
    }

    expect(wrapper.emitted('result')![0]).toStrictEqual([result])
  })
})
