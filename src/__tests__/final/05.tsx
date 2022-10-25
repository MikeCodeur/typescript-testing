// test avec React Testing Library

import * as React from 'react'
import Hello from '../../components/hello'
import {render, fireEvent} from '@testing-library/react'

test('Affiche "Bonjour John" et "Merci" lors d\'un click" ', () => {
  const {container} = render(<Hello name="John" />)
  const envoyer = container.querySelector('input')
  const label = (container?.firstChild as HTMLElement).querySelector('div')

  expect(label?.textContent).toBe(`Bonjour John`)
  fireEvent.click(envoyer as Element)
  expect(label?.textContent).toBe(`Merci`)
})
