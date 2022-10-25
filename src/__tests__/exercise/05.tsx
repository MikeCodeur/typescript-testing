// test basique avec ReactDOM

import * as React from 'react'
import ReactDOM from 'react-dom'
import Hello from '../../components/hello'

// 🐶 importe render, fireEvent, screen
//import {render, fireEvent, screen} from '@testing-library/react'

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  // ⛏️ supprime ces 2 lignes
  const div = document.createElement('div')
  document.body.append(div)

  // ⛏️ remplace ReactDOM.render par 'render'
  // 🤖 render(<Hello name="John" />)
  ReactDOM.render(<Hello name="John" />, div)

  // 🐶 utilise screen.getByRole('button', {name: /envoyer/i})
  const envoyer = div.querySelector('input')
  // 🐶 utilise screen.getByRole('status')
  const label = (div?.firstChild as HTMLElement).querySelector('div')

  expect(label?.textContent).toBe(`Bonjour John`)
  // 🐶 utilise fireEvent
  envoyer?.click()
  expect(label?.textContent).toBe(`Merci`)
})

/*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
