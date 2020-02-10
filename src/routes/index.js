import React from 'react'

const LazyHome = React.lazy(() =>
  import('../containers/Home').then(module => ({ default: module.Home }))
)

const LazyTodos = React.lazy(() =>
  import('../containers/Todos').then(module => ({ default: module.Todos }))
)

const LazyTodo = React.lazy(() =>
  import('../containers/Todos/Todo').then(module => ({ default: module.Todo }))
)

const LazyTodosAll = React.lazy(() =>
  import('../containers/Todos/TodosAll').then(module => ({ default: module.TodosAll }))
)

export const routes = [
  {
    path: '/home',
    component: LazyHome,
    // authRequired: true,
    // exact: true
  },
  {
    path: '/todos',
    component: LazyTodos,
    // exact: true,
    routes: [
      {
        path: '/todos/all',
        component: LazyTodosAll
      },
      {
        path: '/todos/:id',
        exact: true,
        component: LazyTodo
      },
      {
        redirect: '/todos/all',
        from: '*'
      }
    ]
  },
  {
    redirect: '/home',
    from: '*'
  }
]