const { palindrome } = require('../utils/for_testing')

test.skip('palindrome of midudev', () => {
  const result = palindrome('midudev')

  expect(result).toBe('vedudim')
})

test.skip('palindorme of empty string', () => {
  const result = palindrome('')
  expect(result).toBe('')
})

test.skip('palindorme of undefined', () => {
  const result = palindrome()
  expect(result).toBeUndefined()
})
