/* eslint-disable dot-notation */
import { mount, RouterLinkStub } from '@vue/test-utils'
import DailyMacrosForm from '@/components/daily-macros/DailyMacrosForm.vue'
import InputNumber from '@/components/common/InputNumber.vue'
import InputSelect from '@/components/common/InputSelect.vue'
import AppButton from '@/components/common/AppButton.vue'
import { IDailyMacros, IDailyMacrosResult } from '@/types/dailyMacros'
import { GOALS } from '@/constants/dailyMacros'

const DEFAULT_CALORIES = 1999

jest.mock('@/router', () => ({
  useRoute: jest
    .fn()
    .mockImplementationOnce(() => ({
      value: {
        query: {
          calories: DEFAULT_CALORIES.toString(),
        },
      },
    }))
    .mockImplementation(() => ({
      value: { query: {} },
    })),
}))

const mountComponent = () =>
  mount(DailyMacrosForm, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
  })

describe('DailyMacrosForm', () => {
  it('should fill calories field if "calories" is in URL query params', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm['form'].calories).toBe(DEFAULT_CALORIES)
  })

  it('should not fill calories field if has not "calories" is in URL query params', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm['form'].calories).toBe(0)
  })

  it('should mount the component DailyMacrosForm', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.findAllComponents(InputNumber).length).toBe(2)
    expect(wrapper.findComponent(InputSelect).exists()).toBe(true)
    expect(wrapper.findComponent(AppButton).exists()).toBe(true)
  })

  it('should disable "calculate" button if form is not filled correctly', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm['disabled']).toBe(true)

    const form: IDailyMacros = {
      calories: 2000,
      weight: 60,
      goal: GOALS.GAIN,
    }

    wrapper.vm['form'].calories = form.calories
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].goal = form.goal

    expect(wrapper.vm['disabled']).toBe(false)
  })

  it('should emit "result" with the right macros according with the "GAIN" goal', async () => {
    const wrapper = mountComponent()

    const goal = GOALS.GAIN

    const form: IDailyMacros = {
      calories: 2000,
      weight: 60,
      goal,
    }

    wrapper.vm['form'].calories = form.calories
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].goal = form.goal

    await wrapper.find('form').trigger('submit')

    const result: IDailyMacrosResult = {
      goal,
      fat: 61,
      protein: 144,
      carb: 275,
      calories: 2225,
    }

    expect(wrapper.emitted('result')![0]).toStrictEqual([result])
  })

  it('should emit "result" with the right macros according with the "KEEP" goal', async () => {
    const wrapper = mountComponent()

    const goal = GOALS.KEEP

    const form: IDailyMacros = {
      calories: 2000,
      weight: 60,
      goal,
    }

    wrapper.vm['form'].calories = form.calories
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].goal = form.goal

    await wrapper.find('form').trigger('submit')

    const result: IDailyMacrosResult = {
      goal,
      fat: 55,
      protein: 144,
      carb: 250,
      calories: 2071,
    }

    expect(wrapper.emitted('result')![0]).toStrictEqual([result])
  })

  it('should emit "result" with the right macros according with the "LOSE" goal', async () => {
    const wrapper = mountComponent()

    const goal = GOALS.LOSE

    const form: IDailyMacros = {
      calories: 2000,
      weight: 60,
      goal,
    }

    wrapper.vm['form'].calories = form.calories
    wrapper.vm['form'].weight = form.weight
    wrapper.vm['form'].goal = form.goal

    await wrapper.find('form').trigger('submit')

    const result: IDailyMacrosResult = {
      goal,
      fat: 50,
      protein: 144,
      carb: 225,
      calories: 1926,
    }

    expect(wrapper.emitted('result')![0]).toStrictEqual([result])
  })
})
