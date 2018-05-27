import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    mode: 'history',
    routes,
    // base: '/todo/',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    },
    fallback: true
    // parseQuery (query) {

    // },
    // stringifyQuery (object) {

    // }
  })
}
