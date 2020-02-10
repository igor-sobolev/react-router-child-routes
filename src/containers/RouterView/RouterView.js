import React from 'react'
import { Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import { RouteWithSubRoutes } from './RouteWithSubRoutes'

export const RouterView = ({ routes, isAuthenticated = () => true }) => {
  return (
    <Switch>
      {routes.map((route, i) => {
        return (<RouteWithSubRoutes
          key={i}
          {...route}
          isAuthenticated={isAuthenticated()}
        />)
      })}
    </Switch>
  )
}

RouterView.propTypes = {
  isAuthenticated: PropTypes.func,
  routes: PropTypes.array
}