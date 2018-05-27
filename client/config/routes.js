// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    name: 'app',
    path: '/app',
    component: () => import('../views/todo/todo.vue'),
    meta: {
      title: 'todos',
      description: 'this is a todo app'
    },
    children: []
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  }
]
