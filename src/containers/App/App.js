import React, { Suspense } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import './App.css'

import { routes } from '../../routes'
import { Spinner } from '../../components/UI/Spinner'
import { RouterView } from '../RouterView'

export const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Link to="/home">Home</Link>
        <Link to="/todos">Todos</Link>
        <RouterView routes={routes} />
      </Router>
    </Suspense>
  )
}
