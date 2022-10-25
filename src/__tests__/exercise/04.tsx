// test basique avec ReactDOM

import * as React from 'react'
import ReactDOM from 'react-dom'
// 🐶 importe le composant 'Hello' situé ici  '../../components/hello'

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  // 🐶 créé une div avec 'createElement'
  // 🐶 ajoute cette div dans le document.body
  // 🐶 utilise 'ReactDOM.render' pour ajouter le composant Hello dans la div
  // 🤖 ReactDOM.render(<Hello name="John" />, div)
  // 🐶 récupère le button 'envoyer' grace à querySelector
  // 🐶 récupère le label 'label' grace à 'querySelector' et 'firstChild'
  // attention au casting
  // 🐶 test que le label (textContent) soit bien `Bonjour John`
  // 🐶 simule un clique sur le button grace à la function click() de 'envoyer'
  // 🐶 test que le label (textContent) soit bien `Bonjour Merci`
})
/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
