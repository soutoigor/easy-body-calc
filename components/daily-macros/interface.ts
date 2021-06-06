export type Goal = 'lose' | 'keep' | 'gain'

export interface DailyMacros {
  calories: number
  weight: number
  goal: Goal
}

export interface Result {
  goal: Goal
  fat: number
  protein: number
  carb: number
  calories: number
}
