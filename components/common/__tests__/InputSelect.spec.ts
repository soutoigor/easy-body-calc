/* eslint-disable dot-notation */
import { mount } from '@vue/test-utils'
import InputSelect from '@/components/common/InputSelect.vue'
import { BiologicalSex } from './../../body-fat/interface'

const items = [
  {
    label: 'Male',
    value: 'M',
  },
  {
    label: 'Female',
    value: 'F',
  },
]

const label = 'Biological sex'

const mountComponent = (value: BiologicalSex | null) =>
  mount(InputSelect, {
    propsData: {
      label,
      items,
      value,
    },
  })

describe('InputSelect', () => {
  it('should mount the component InputSelect', () => {
    const wrapper = mountComponent('M')

    expect(wrapper.vm).toBeDefined()
  })

  it('should have "active" class only if has value', async () => {
    const wrapper = mountComponent('M')

    const activeClass = 'field__input--active'

    expect(wrapper.find('[data-testid="field"]').classes()).toContain(
      activeClass
    )

    await wrapper.setProps({ value: null })

    expect(wrapper.find('[data-testid="field"]').classes()).not.toContain(
      activeClass
    )
  })

  it('should display label and input default value', () => {
    const wrapper = mountComponent('M')

    const inputField: HTMLSelectElement = wrapper.find('[data-testid="field"]')
      .element as HTMLSelectElement

    const inputValue = inputField.value

    expect(wrapper.text()).toContain(label)
    expect(inputValue).toBe('M')
  })

  it('should emit the selected value', async () => {
    const wrapper = mountComponent(null)

    const options = wrapper.find('[data-testid="field"]').findAll('option')

    await options.at(1).setSelected()

    expect(wrapper.emitted('input')).toBeTruthy()
    expect(wrapper.emitted('input')![0]).toEqual(['F'])
  })
})
