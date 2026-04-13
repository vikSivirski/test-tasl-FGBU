import { describe, expect, it } from 'vitest'
import { parsePositiveInt } from './parse-positive-int'

describe('parsePositiveInt', () => {
  it('returns fallback for null and invalid values', () => {
    expect(parsePositiveInt(null)).toBe(1)
    expect(parsePositiveInt('abc')).toBe(1)
    expect(parsePositiveInt('-3')).toBe(1)
  })

  it('parses and floors valid positive values', () => {
    expect(parsePositiveInt('1')).toBe(1)
    expect(parsePositiveInt('2.9')).toBe(2)
  })

  it('respects custom fallback', () => {
    expect(parsePositiveInt(null, 5)).toBe(5)
  })
})
