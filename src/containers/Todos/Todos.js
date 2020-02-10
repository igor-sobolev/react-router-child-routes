import React from 'react'
import PropTypes from 'prop-types'

import { RouterView } from '../RouterView'

export const Todos = ({ routes }) => (
  <RouterView routes={routes} />
)

Todos.propTypes = {
  routes: PropTypes.array
}