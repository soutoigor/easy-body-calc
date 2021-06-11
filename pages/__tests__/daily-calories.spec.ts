import { mount, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import DailyCalories from '@/pages/bmr-daily-calories.vue'
import DailyCaloriesForm from '@/components/daily-calories/DailyCaloriesForm.vue'
import DailyCaloriesResult from '@/components/daily-calories/DailyCaloriesResult.vue'
import AppExplanation from '@/components/common/AppExplanation.vue'
import { IDailyCaloriesResult } from '@/types/dailyCalories'
import { SITE_MAP } from '@/constants/siteMap'

const WrapperComponent = Vue.component('WrapperComponent', {
  template: '<div><slot /></div>',
})

const mountComponent = () =>
  mount(WrapperComponent, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    slots: {
      default: DailyCalories,
    },
  })

const result: IDailyCaloriesResult = {
  bmr: 1750,
  calories: 2000,
}

describe('DailyCalories', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should show form and hide the result when there is no "result"', () => {
    const wrapper = mountComponent()

    expect(wrapper.findComponent(AppExplanation).isVisible()).toBe(true)
    expect(wrapper.findComponent(DailyCaloriesForm).isVisible()).toBe(true)
    expect(wrapper.findComponent(DailyCaloriesResult).exists()).toBe(false)
  })

  it('should show result and hide form when there is "result"', async () => {
    const wrapper = mountComponent()

    wrapper.findComponent(DailyCaloriesForm).vm.$emit('result', result)

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(DailyCaloriesResult).isVisible()).toBe(true)
    expect(wrapper.findComponent(AppExplanation).exists()).toBe(true)
    expect(wrapper.findComponent(DailyCaloriesForm).exists()).toBe(false)
  })

  it('should show "formTitle" according if there is "result"', async () => {
    const wrapper = mountComponent()

    const title = wrapper.find('.calc-section__title')

    expect(title.text()).toContain('Calculate your Daily Calories bellow:')

    wrapper.findComponent(DailyCaloriesForm).vm.$emit('result', result)

    await wrapper.vm.$nextTick()

    expect(title.text()).toContain('Your result:')
  })

  it('should display form again if "calculate again" button is clicked', async () => {
    const wrapper = mountComponent()

    wrapper.findComponent(DailyCaloriesForm).vm.$emit('result', result)

    await wrapper.vm.$nextTick()

    await wrapper.find('[data-testid="calculate-again"]').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(DailyCaloriesForm).isVisible()).toBe(true)
    expect(wrapper.findComponent(AppExplanation).isVisible()).toBe(true)
    expect(wrapper.findComponent(DailyCaloriesResult).exists()).toBe(false)
  })

  it('should call "router.push" with "macros" url and result calories as query param', async () => {
    const wrapper = mountComponent()

    wrapper.findComponent(DailyCaloriesForm).vm.$emit('result', result)

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(RouterLinkStub).props().to).toStrictEqual({
      path: SITE_MAP.MACROS.url,
      query: { calories: result.calories.toString() },
    })
  })
})
