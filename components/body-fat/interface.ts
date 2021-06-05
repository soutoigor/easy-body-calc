export type BiologicalSex = 'M' | 'F' | null

export interface BodyFat {
  height: number | null
  neck: number | null
  abdomen: number | null
  biologicalSex: BiologicalSex
  hip: number | null
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
  biologicalSex: BiologicalSex
}
