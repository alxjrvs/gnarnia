// import { createContext, Dispatch, useContext } from 'react'
import { Dispatch, useContext } from 'react'
import { createContext } from 'use-context-selector'
import { Action } from './reducer'

export type Gnarnian = {
  name: string
  key: string
  role: string
  power: string
}

export type State = {
  gnarnians: Gnarnian[]
}

export const initialGnarnians: Gnarnian[] = [
  {
    name: 'Alex Jarvis',
    key: 'alxjrvs',
    role: 'dev',
    power: 'is funny, but only when no one is listening',
  },
  {
    name: 'Andrew Palmer',
    key: 'andrwplmr',
    role: 'dev',
    power: 'Can scale large walls in just one lunch break',
  },
  {
    name: 'Mark Lodato',
    key: 'mrkldt',
    role: 'dev',
    power: 'Stretching Limbs',
  },
  {
    name: 'Pete Whiting',
    key: 'ptwhtng',
    role: 'sales',
    power: 'Timeline manipulation (easier scheduling)',
  },
  {
    name: 'Reese Williams',
    key: 'rswllms',
    role: 'dev',
    power: 'Knows everyones darkest fear',
  },
  {
    name: 'Jon Yurek',
    key: 'jnyrk',
    role: 'dev',
    power: 'Limited Reality Manipulation',
  },
  {
    name: 'Sorath Roeung',
    key: 'srthrng',
    role: 'dev',
    power: 'Has never needed to apologize in his entire life',
  },
  {
    name: 'Selina Mazzola',
    key: 'slnmzzl',
    role: 'office',
    power: 'Psychic',
  },
  {
    name: 'Adam Mandeville',
    key: 'admmndvll',
    role: 'dev',
    power: 'Has killed before, and will kill again',
  },
  {
    name: 'Dan Frenette',
    key: 'dnfrntt',
    role: 'dev',
    power: 'SCRUM-Lord',
  },
  {
    name: 'Kevin Murphy',
    key: 'kvnmrph',
    role: 'dev',
    power: 'X-ray Vision (Imagines the audience naked *too well*)',
  },
  {
    name: 'Mike Stone',
    key: 'mkstn',
    role: 'dev',
    power: 'Peak Human Performance (Athlete)',
  },
  {
    name: 'Nick Maloney',
    key: 'nckmln',
    role: 'dev',
    power: 'Invisibility (camo)',
  },
  {
    name: 'Taylor Kearns',
    key: 'tlrkrns',
    role: 'dev',
    power: 'Plant Control',
  },
]

export const initialState: State = {
  gnarnians: initialGnarnians,
}

type Context = [State, Dispatch<Action>]

export const initialContext: Context = [initialState, () => null]
export const AppContext = createContext(initialContext)
export const useAppContext = () => useContext(AppContext)
