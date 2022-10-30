import { mount } from '@vue/test-utils'
import GeneticPotentialResult from '@/components/genetic-potential/GeneticPotentialResult.vue'
import { IGeneticPotentialResult } from '@/types/geneticPotential'

const result: IGeneticPotentialResult = {
  calf: 40.36,
  chest: 109.39,
  foreArm: 30.7,
  neck: 38.37,
  thigh: 61.25,
  upperArm: 38.89,
  weight: 0,
}

const mountComponent = () =>
  mount(GeneticPotentialResult, {
    propsData: { result },
  })

describe('GeneticPotentialResult', () => {
  it('should mount the component', () => {
    const wrapper = mountComponent()

    expect(wrapper.vm).toBeDefined()
  })

  it('should display the right max muscle measures', () => {
    const wrapper = mountComponent()

    expect(wrapper.text()).toContain(`Chest: ${result.chest}`)
    expect(wrapper.text()).toContain(`Upper Arm: ${result.upperArm}`)
    expect(wrapper.text()).toContain(`Fore Arm: ${result.foreArm}`)
    expect(wrapper.text()).toContain(`Thigh: ${result.thigh}`)
    expect(wrapper.text()).toContain(`Calf: ${result.calf}`)
    expect(wrapper.text()).toContain(`Neck: ${result.neck}`)
  })
})
