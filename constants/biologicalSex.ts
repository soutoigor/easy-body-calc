import { IBiologicalSex } from '@/types/biologicalSex'
import { TSelectItems } from '@/types/selectOption'

export const BIOLOGICAL_SEX: IBiologicalSex = {
  MALE: 'M',
  FEMALE: 'F',
}

export const BIOLOGICAL_SEX_ITEMS: TSelectItems = [
  {
    label: 'Male',
    value: BIOLOGICAL_SEX.MALE,
  },
  {
    label: 'Female',
    value: BIOLOGICAL_SEX.FEMALE,
  },
]
