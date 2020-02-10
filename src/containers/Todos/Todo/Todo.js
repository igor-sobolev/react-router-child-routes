import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const Todo = () => {
  const params = useParams()

  return (<div>
    <Link to="/todos/all">Back</Link>
    Todo: {params.id}
  </div>)
}