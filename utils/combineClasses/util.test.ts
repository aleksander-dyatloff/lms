import combineClasses from './util'

describe('Combine classes utility', () => {
  test('should return only strings', () => {
    const result = combineClasses('some', true, false, NaN, Infinity, 23, 'word')

    expect(result).toBe('some word')
  })
})
