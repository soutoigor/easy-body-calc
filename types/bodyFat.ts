import { TBiologicalSex } from '@/types/biologicalSex'

export interface IBodyFat {
  height: number
  neck: number
  abdomen: number
  biologicalSex: TBiologicalSex
  hip: number
}

export interface IMenCalc {
  height: number
  abdomen: number
  neck: number
}

export interface IWomenCalc extends IMenCalc {
  hip: number
}

export interface IBodyFatResult {
  result: number | null
  biologicalSex: TBiologicalSex | null
}
