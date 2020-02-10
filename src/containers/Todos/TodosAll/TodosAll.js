import React from 'react'
import { Link } from 'react-router-dom'

export const TodosAll = () => (
  <div>
    <Link to="/todos/1">1</Link>
    <Link to="/todos/2">2</Link>
    <Link to="/todos/3">3</Link>
  </div>
)