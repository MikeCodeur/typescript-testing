// test basique avec ReactDOM
// http://localhost:3000/alone/exercise/01.js
/* eslint-disable no-unused-vars */

// 🐶 importe également 'sumNotNegative' pour pourvoir l'utiliser dans le test
import {sum} from '../../exercise/helper/library'

describe('test de sum', () => {
  test('doit retourner la somme', () => {
    expect(sum(2, 3)).toBe(5)
  })
})

// describe('test de sum', () => {
//   test('doit retourner 0', () => {
//     expect(sumNotNegative(-20, 3)).toBe(0)
//   })
// })

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  // 🐶 créé une div pour faire le rendu du composant Hello (🤖 document.createElement)
  // 🐶 Ajoute ensuite cette div dans le body du document
  // 🤖 document.body.append(div)
  // 🐶 utilise `ReactDOM.render` pour faire le rendu de <Hello> avec le prop name='John'
  // 🐶 récupére le bouton 'envoyer'
  // 🤖 div.querySelector
  // 🐶 récupère l'élément du libéllé qui est dans la deuxième div
  // 🤖 label = div.firstChild.querySelector('div'))
  // 🐶 teste que label.textContent soit égal = `Bonjour John`
  // 🤖 expect(element à tester).toBe(`Bonjour John`)
  // 🐶 simule un click sur le bouton
  // 🤖 envoyer.click()
  // 🐶 teste que label.textContent soit maintenant égal = `Merci`
})
