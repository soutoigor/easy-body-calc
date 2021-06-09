import { TBiologicalSex } from '@/types/biologicalSex'

export type TActivity = 1.2 | 1.375 | 1.55 | 1.725 | 1.9 | 0

export interface IBmr {
  weight: number
  height: number
  age: number
}

export interface IDailyCalories extends IBmr {
  biologicalSex: TBiologicalSex
  activity: TActivity
}

export interface IDailyCaloriesResult {
  bmr: number
  calories: number
}
