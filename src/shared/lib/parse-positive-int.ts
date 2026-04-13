export const parsePositiveInt = (value: string | null, fallback = 1): number => {
  const parsed = Number(value)

  if (!Number.isFinite(parsed) || parsed < 1) {
    return fallback
  }

  return Math.floor(parsed)
}
