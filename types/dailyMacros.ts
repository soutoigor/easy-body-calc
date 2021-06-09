export type TGoal = 'lose' | 'keep' | 'gain'

export interface IGoals {
  LOSE: TGoal
  KEEP: TGoal
  GAIN: TGoal
}

export interface IDailyMacros {
  calories: number
  weight: number
  goal: TGoal
}

export interface IDailyMacrosResult {
  goal: TGoal
  fat: number
  protein: number
  carb: number
  calories: number
}

export type TResultForm = IDailyMacrosResult | null
