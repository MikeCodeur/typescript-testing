// test basique avec ReactDOM

import {DataBaseConnexion} from '../../exercise/helper/library'

beforeEach(() => {
  DataBaseConnexion.getInstance().clearDb()
})

describe('DataBaseConnexion:add', () => {
  test('devrait avoir une taille de 1', () => {
    DataBaseConnexion.getInstance().add('first')
    expect(DataBaseConnexion.getInstance().getSize()).toBe(1)
  })
  test('devrait avoir une taille de 2', () => {
    DataBaseConnexion.getInstance().add('first')
    DataBaseConnexion.getInstance().add('second')
    expect(DataBaseConnexion.getInstance().getSize()).toBe(2)
  })
  test('devrait avoir une taille de 1', () => {
    DataBaseConnexion.getInstance().add('first')
    DataBaseConnexion.getInstance().add('second')
    DataBaseConnexion.getInstance().clearDb()
    DataBaseConnexion.getInstance().add('third')
    expect(DataBaseConnexion.getInstance().getSize()).toBe(1)
  })
})

describe('DataBaseConnexion:addElements', () => {
  test('devrait avoir une taille de 2', () => {
    DataBaseConnexion.getInstance().addElements(['first', 'second'])
    expect(DataBaseConnexion.getInstance().getSize()).toBe(2)
  })
  test('devrait avoir une taille de 4', () => {
    DataBaseConnexion.getInstance().addElements(['first', 'second'])
    DataBaseConnexion.getInstance().addElements(['first', 'second'])
    expect(DataBaseConnexion.getInstance().getSize()).toBe(4)
  })
  test('devrait avoir une taille de 3', () => {
    DataBaseConnexion.getInstance().addElements(['first', 'second'])
    DataBaseConnexion.getInstance().add('third')
    expect(DataBaseConnexion.getInstance().getSize()).toBe(3)
  })
})
