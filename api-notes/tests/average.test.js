const { averange } = require('../utils/for_testing')

describe('average', () => {
  test('of one value is the value itself', () => {
    expect(averange([1])).toBe(1)
  })

  test('of many is calculated correctly', () => {
    expect(averange([1, 2, 3, 4, 5, 6])).toBe(3.5)
  })

  test('of empty arrray is zero', () => {
    expect(averange([])).toBe(0)
  })
})
