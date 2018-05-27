import Vue from 'vue'
import Vuex from 'vuex'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import App from './app.vue'
import CreateRouter from './config/router'
import CreateStore from './store/store'
import Notification from './components/notification'
import Tabs from './components/tabs'
import './assets/styles/global.styl'

Vue.use(Vuex)
Vue.use(VueMeta)
Vue.use(VueRouter)
Vue.use(Notification)
Vue.use(Tabs)

export default () => {
  const router = new CreateRouter()
  const store = new CreateStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return {app, router, store}
}
