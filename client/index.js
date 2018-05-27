import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app.vue'
import CreateRouter from './config/router'
import CreateStore from './store/store'
// import router from './config/router'
import './assets/styles/global.styl'

// const root = document.createElement('div')
// document.body.appendChild(root)

// new Vue({
//   render: (h) => h(App)
// }).$mount(root)
Vue.use(VueRouter)
Vue.use(Vuex)
const router = new CreateRouter()
const store = new CreateStore()

// store.registerModule('login', {
//   state: {
//     username: ''
//   }
// })
// store.unregisterModule('login')
// store.watch((state) => state.count + 1, (newCount) => {
//   console.log(newCount)
// })
// store.subscribe((mutations, state) => {
//   console.log(mutations.type)
//   console.log(mutations.payload)
// })
// store.subscribeAction((actions, state) => {
//   console.log(actions.type)
//   console.log(actions.payload)
// })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
