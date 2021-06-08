export type BiologicalSex = 'M' | 'F'

export interface BodyFat {
  height: number
  neck: number
  abdomen: number
  biologicalSex: BiologicalSex
  hip: number
}

export interface MenCalc {
  height: number
  abdomen: number
  neck: number
}

export interface WomenCalc extends MenCalc {
  hip: number
}

export interface Result {
  result: number | null
  biologicalSex: BiologicalSex | null
}
