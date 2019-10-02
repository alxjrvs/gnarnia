import { useReducer } from 'react'
import { Gnarnian, initialGnarnians, initialState, State } from './context'
export type Action = {
  payload?: any
  type: string
}

const ADD_GNARNIAN = 'ADD_GNARNIAN'
export const addGnarnian = (gnarnian: Gnarnian) => ({
  type: ADD_GNARNIAN,
  payload: gnarnian,
})

const REFRESH_GNARNIANS = 'REFRESH_GNARNIANS'
export const refreshGnarnians = () => ({
  type: REFRESH_GNARNIANS,
})

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_GNARNIAN:
      return {
        ...state,
        gnarnians: [...state.gnarnians, action.payload],
      }
    case REFRESH_GNARNIANS:
      return {
        ...state,
        gnarnians: shuffle(initialGnarnians),
      }

    default:
      return state
  }
}

export const useAppReducer = () => useReducer(reducer, initialState)

const shuffle = (a: Gnarnian[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
