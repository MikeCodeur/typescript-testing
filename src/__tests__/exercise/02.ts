// test basique avec ReactDOM
// http://localhost:3000/alone/exercise/01.js
/* eslint-disable no-unused-vars */

import {sum, sumNotNegative} from '../../exercise/helper/library'

// 🐶 Groupe Sum : Wrappe ce test de 'describe'
test('devrait retourner 5', () => {
  expect(sum(2, 3)).toBe(5)
})
// ajoute les 2 autres tests au groupe

// 🐶 Groupe sumNotNegative : Wrappe ce test de 'describe'
test('devrait retourner 5', () => {
  expect(sumNotNegative(2, 3)).toBe(5)
})
// ajoute les 2 autres tests au groupe

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
