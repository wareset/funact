export function clamp(x: number, lower: number, upper: number): number {
  return x < lower ? lower : x > upper ? upper : x
}

export function scale(
  x: number,
  inLow: number,
  inHigh: number,
  outLow: number,
  outHigh: number
): number {
  return ((x - inLow) * (outHigh - outLow)) / (inHigh - inLow) + outLow
}
