import { navigate } from 'hookrouter'
import React from 'react'
import { Container } from 'react-bootstrap'
import './App.css'
import { AppContext } from './context'
import { useAppReducer } from './reducer'
import { AppRouter } from './router'

const App = () => {
  const contextValue = useAppReducer()

  const navHome = () => navigate('/')

  return (
    <AppContext.Provider value={contextValue}>
      <Container fluid>
        <h1 style={{ cursor: 'pointer' }} onClick={navHome}>
          Welcome To....Gnarnia!
        </h1>
        <AppRouter />
      </Container>
    </AppContext.Provider>
  )
}

export default App
