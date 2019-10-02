import { HookRouter as HookRouterTypes, useRoutes } from 'hookrouter'
import React from 'react'
import { NewGnarnianForm } from './components/AddGnarnianForm/indext'
import { GnarnianDisplay } from './components/GnarnianDisplay'
import { GnarnianList } from './components/GnarnianList'

const routes = {
  '/new': () => <NewGnarnianForm />,
  '/': () => <GnarnianList />,
  '/gnarnian/:gnarnianKey': ({ gnarnianKey }) => (
    <GnarnianDisplay gnarnianKey={gnarnianKey} />
  ),
} as HookRouterTypes.RouteObject

export const AppRouter = () => {
  return useRoutes(routes) || <h1> Page Not Found! </h1>
}
