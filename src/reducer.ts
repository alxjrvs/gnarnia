import { useReducer } from 'react'
import { Gnarnian, initialState, State } from './context'
export type Action = {
  payload?: any
  type: string
}

const ADD_GNARNIAN = 'ADD_GNARNIAN'
export const addGnarnian = (gnarnian: Gnarnian) => ({
  type: ADD_GNARNIAN,
  payload: gnarnian,
})

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_GNARNIAN:
      return {
        ...state,
        gnarnians: [...state.gnarnians, action.payload],
      }
    default:
      return state
  }
}

export const useAppReducer = () => useReducer(reducer, initialState)
