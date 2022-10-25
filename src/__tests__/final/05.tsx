// test avec React Testing Library

import * as React from 'react'
import Hello from '../../components/hello'
import {render, fireEvent, screen} from '@testing-library/react'

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  render(<Hello name="John" />)
  const envoyer = screen.getByRole('button', {name: /envoyer/i})
  const label = screen.getByRole('status')

  expect(label?.textContent).toBe(`Bonjour John`)
  fireEvent.click(envoyer as Element)
  expect(label?.textContent).toBe(`Merci`)
})
