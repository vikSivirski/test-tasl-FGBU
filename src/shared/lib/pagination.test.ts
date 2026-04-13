import { describe, expect, it } from 'vitest'
import { getPaginationItems } from './pagination'

describe('getPaginationItems', () => {
  it('returns all pages when total is small', () => {
    expect(getPaginationItems(1, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it('returns right ellipsis near start', () => {
    expect(getPaginationItems(2, 10)).toEqual([1, 2, 3, 4, 5, 'ellipsis', 10])
  })

  it('returns both ellipses in middle', () => {
    expect(getPaginationItems(5, 10)).toEqual([1, 'ellipsis', 4, 5, 6, 'ellipsis', 10])
  })

  it('returns left ellipsis near end', () => {
    expect(getPaginationItems(9, 10)).toEqual([1, 'ellipsis', 6, 7, 8, 9, 10])
  })
})
