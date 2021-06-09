import { mount, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import IBodyFat from '@/pages/body-fat.vue'
import BodyFatForm from '@/components/body-fat/BodyFatForm.vue'
import BodyFatResult from '@/components/body-fat/BodyFatResult.vue'
import BodyFatComparison from '@/components/body-fat/BodyFatComparison.vue'
import AppExplanation from '@/components/common/AppExplanation.vue'
import { IBodyFatResult } from '@/types/bodyFat'
import { BIOLOGICAL_SEX } from '@/constants/biologicalSex'

const WrapperComponent = Vue.component('WrapperComponent', {
  template: '<div><slot /></div>',
})

const result: IBodyFatResult = {
  biologicalSex: BIOLOGICAL_SEX.MALE,
  result: 28,
}

const mountComponent = () =>
  mount(WrapperComponent, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    slots: {
      default: IBodyFat,
    },
  })

describe('IBodyFat', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
  })

  it('should show form and hide the result when there is no "result"', () => {
    const wrapper = mountComponent()

    expect(wrapper.findComponent(AppExplanation).isVisible()).toBe(true)
    expect(wrapper.findComponent(BodyFatForm).isVisible()).toBe(true)
    expect(wrapper.findComponent(BodyFatResult).exists()).toBe(false)
    expect(wrapper.findComponent(BodyFatComparison).exists()).toBe(false)
  })

  it('should show result and hide form when there is "result"', async () => {
    const wrapper = mountComponent()

    wrapper.findComponent(BodyFatForm).vm.$emit('result', result)

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(BodyFatResult).isVisible()).toBe(true)
    expect(wrapper.findComponent(BodyFatComparison).isVisible()).toBe(true)
    expect(wrapper.findComponent(BodyFatForm).exists()).toBe(false)
    expect(wrapper.findComponent(AppExplanation).exists()).toBe(false)
  })

  it('should show "formTitle" according if there is "result"', async () => {
    const wrapper = mountComponent()

    expect(wrapper.text()).toContain('Calculate your Body Fat bellow:')

    wrapper.findComponent(BodyFatForm).vm.$emit('result', result)

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Your result:')
  })

  it('should display form again if "calculate again" button is clicked', async () => {
    const wrapper = mountComponent()

    wrapper.findComponent(BodyFatForm).vm.$emit('result', result)

    await wrapper.vm.$nextTick()

    await wrapper.find('[data-testid="calculate-again"]').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(BodyFatForm).isVisible()).toBe(true)
    expect(wrapper.findComponent(AppExplanation).isVisible()).toBe(true)
    expect(wrapper.findComponent(BodyFatResult).exists()).toBe(false)
    expect(wrapper.findComponent(BodyFatComparison).exists()).toBe(false)
  })
})
