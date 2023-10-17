import isEmpty from "../src/hooks/check-empty-object"

test("Test isEmpty() function", () => {
  expect(isEmpty({})).toBe(true)
  expect(isEmpty({"not": "empty"})).toBe(false)
  expect(isEmpty({"": ""})).toBe(false)
})
