import { mount, RouterLinkStub } from '@vue/test-utils'
import Vue from 'vue'
import IBmi from '@/pages/bmi.vue'
import BmiForm from '@/components/bmi/BmiForm.vue'
import BmiResult from '@/components/bmi/BmiResult.vue'
import BmiComparison from '@/components/bmi/BmiComparison.vue'
import AppExplanation from '@/components/common/AppExplanation.vue'

const WrapperComponent = Vue.component('WrapperComponent', {
  template: '<div><slot /></div>',
})

const mountComponent = () =>
  mount(WrapperComponent, {
    stubs: {
      NuxtLink: RouterLinkStub,
    },
    slots: {
      default: IBmi,
    },
  })

describe('Home', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
  })

  it('should show form and hide the result when there is no "result"', () => {
    const wrapper = mountComponent()

    expect(wrapper.findComponent(BmiForm).isVisible()).toBe(true)
    expect(wrapper.findComponent(AppExplanation).isVisible()).toBe(true)
    expect(wrapper.findComponent(BmiResult).exists()).toBe(false)
    expect(wrapper.findComponent(BmiComparison).exists()).toBe(false)
  })

  it('should show result and hide form when there is "result"', async () => {
    const wrapper = mountComponent()

    wrapper.findComponent(BmiForm).vm.$emit('result', 20)

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(BmiResult).isVisible()).toBe(true)
    expect(wrapper.findComponent(BmiComparison).isVisible()).toBe(true)
    expect(wrapper.findComponent(BmiForm).exists()).toBe(false)
    expect(wrapper.findComponent(AppExplanation).exists()).toBe(false)
  })

  it('should show "formTitle" according if there is "result"', async () => {
    const wrapper = mountComponent()

    expect(wrapper.text()).toContain('Calculate your BMI bellow:')

    wrapper.findComponent(BmiForm).vm.$emit('result', 20)

    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Your result:')
  })

  it('should display form again if "calculate again" button is clicked', async () => {
    const wrapper = mountComponent()

    wrapper.findComponent(BmiForm).vm.$emit('result', 20)

    await wrapper.vm.$nextTick()

    await wrapper.find('[data-testid="calculate-again"]').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(BmiForm).isVisible()).toBe(true)
    expect(wrapper.findComponent(AppExplanation).isVisible()).toBe(true)
    expect(wrapper.findComponent(BmiResult).exists()).toBe(false)
    expect(wrapper.findComponent(BmiComparison).exists()).toBe(false)
  })
})
