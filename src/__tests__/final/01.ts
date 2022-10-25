// test basique avec ReactDOM

import {sum, sumNotNegative} from '../../exercise/helper/library'

test('test de sum', () => {
  expect(sum(2, 3)).toBe(5)
})

test('devrait retourner 0', () => {
  expect(sumNotNegative(-20, 3)).toBe(0)
})
