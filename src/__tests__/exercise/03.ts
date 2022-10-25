// test basique avec ReactDOM
// http://localhost:3000/alone/exercise/01.js
/* eslint-disable no-unused-vars */

import {DataBaseConnexion} from '../../exercise/helper/library'

// 🐶 vide la BDD avec 'DataBaseConnexion.getInstance().clearDb()' avant chaque test
// 🤖 beforeEach(() => {

describe('DataBaseConnexion:add', () => {
  test('devrait avoir une taille de 1', () => {
    // 🐶 appelle add('first')
    // vérifie que 'size' soit égale à 1
  })
  test('devrait avoir une taille de 2', () => {
    // 🐶 appelle add('first') et add('second')
    // vérifie que 'size' soit égale à 2
  })
  test('devrait avoir une taille de 1', () => {
    // 🐶 appelle add('first') et add('second')
    // appelle 'clearDb'
    // appelle add('third')
    // vérifie que 'size' soit égale à 1
  })
})

describe('DataBaseConnexion:addElements', () => {
  test('devrait avoir une taille de 2', () => {
    // 🐶 appelle .addElements(['first', 'second'])
    // vérifie que 'size' soit égale à 2
  })
  test('devrait avoir une taille de 4', () => {
    // 🐶 appelle .addElements(['first', 'second'])
    // appelle nouveau  .addElements(['first', 'second'])
    // vérifie que 'size' soit égale à 4
  })
  test('devrait avoir une taille de 3', () => {
    // 🐶 appelle .addElements(['first', 'second'])
    // 🐶 appelle .add('third')
    // vérifie que 'size' soit égale à 3
  })
})
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
