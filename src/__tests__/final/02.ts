// test basique avec ReactDOM

import {sum, sumNotNegative} from '../../exercise/helper/library'

describe('Sum', () => {
  test('devrait retourner 5', () => {
    expect(sum(2, 3)).toBe(5)
  })
  test('devrait retourner 3', () => {
    expect(sum(0, 3)).toBe(3)
  })
  test('devrait retourner -5', () => {
    expect(sum(-2, -3)).toBe(-5)
  })
})

describe('sumNotNegative', () => {
  test('devrait retourner 5', () => {
    expect(sumNotNegative(2, 3)).toBe(5)
  })
  test('devrait retourner 3', () => {
    expect(sumNotNegative(0, 3)).toBe(3)
  })
  test('devrait retourner 0', () => {
    expect(sumNotNegative(-2, -3)).toBe(0)
  })
})
