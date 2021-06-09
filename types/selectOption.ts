export type TValue = string | number

interface IOption {
  label: string
  value: TValue
}

export type TSelectItems = Array<IOption>
