const { palindrome } = require('../utils/for_testing')

test('palindrome of midudev', () => {
  const result = palindrome('midudev')

  expect(result).toBe('vedudim')
})

test('palindorme of empty string', () => {
  const result = palindrome('')
  expect(result).toBe('')
})

test('palindorme of undefined', () => {
  const result = palindrome()
  expect(result).toBeUndefined()
})
