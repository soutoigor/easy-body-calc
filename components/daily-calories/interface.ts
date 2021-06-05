export type BiologicalSex = 'M' | 'F'

type Activities = 1.2 | 1.375 | 1.55 | 1.725 | 1.9 | 0

export interface Bmr {
  weight: number
  height: number
  age: number
}

export interface DailyCalories extends Bmr {
  biologicalSex: BiologicalSex | null
  activity: Activities
}

export interface Result {
  bmr: number
  calories: number
}
