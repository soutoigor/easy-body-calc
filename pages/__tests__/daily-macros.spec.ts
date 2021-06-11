import { mount, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import DailyMacros from '@/pages/daily-macros.vue'
import DailyMacrosForm from '@/components/daily-macros/DailyMacrosForm.vue'
import DailyMacrosResult from '@/components/daily-macros/DailyMacrosResult.vue'
import AppExplanation from '@/components/common/AppExplanation.vue'
import { IDailyMacrosResult } from '@/types/dailyMacros'
import { GOALS } from './../../constants/dailyMacros'

const WrapperComponent = Vue.component('WrapperComponent', {
  template: '<div><slot /></div>',
})

jest.mock('@/router', () => ({
  useRoute: jest.fn(() => ({
    value: {
      query: {
        calories: '2000',
      },
    },
  })),
}))

const result: IDailyMacrosResult = {
  goal: GOALS.GAIN,
  fat: 50,
  protein: 120,
  carb: 200,
  calories: 2000,
}

const mountComponent = () =>
  mount(WrapperComponent, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    slots: {
      default: DailyMacros,
    },
  })

describe('DailyMacros', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should show form and hide the result when there is no "result"', () => {
    const wrapper = mountComponent()

    expect(wrapper.findComponent(AppExplanation).isVisible()).toBe(true)
    expect(wrapper.findComponent(DailyMacrosForm).isVisible()).toBe(true)
    expect(wrapper.findComponent(DailyMacrosResult).exists()).toBe(false)
  })

  it('should show result and hide form when there is "result"', async () => {
    const wrapper = mountComponent()

    wrapper.findComponent(DailyMacrosForm).vm.$emit('result', result)

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(DailyMacrosResult).isVisible()).toBe(true)
    expect(wrapper.findComponent(AppExplanation).exists()).toBe(true)
    expect(wrapper.findComponent(DailyMacrosForm).exists()).toBe(false)
  })

  it('should show "formTitle" according if there is "result"', async () => {
    const wrapper = mountComponent()

    const title = wrapper.find('.calc-section__title')

    expect(title.text()).toContain('Calculate your Macros bellow:')

    wrapper.findComponent(DailyMacrosForm).vm.$emit('result', result)

    await wrapper.vm.$nextTick()

    expect(title.text()).toContain('Your result:')
  })

  it('should display form again if "calculate again" button is clicked', async () => {
    const wrapper = mountComponent()

    wrapper.findComponent(DailyMacrosForm).vm.$emit('result', result)

    await wrapper.vm.$nextTick()

    await wrapper.find('[data-testid="calculate-again"]').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(DailyMacrosForm).isVisible()).toBe(true)
    expect(wrapper.findComponent(AppExplanation).isVisible()).toBe(true)
    expect(wrapper.findComponent(DailyMacrosResult).exists()).toBe(false)
  })

  it('should display macros modal if click "Know more about each macro"', async () => {
    const wrapper = mountComponent()

    const modalTitles = wrapper.find('.macros__title')

    expect(modalTitles.isVisible()).toBe(false)

    await wrapper.find('[data-testid="open-macros"]').trigger('click')

    await wrapper.vm.$nextTick()

    expect(modalTitles.isVisible()).toBe(true)
  })
})
