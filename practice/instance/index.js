import Vue from 'vue'

// const root = document.createElement('div')
// document.body.appendChild(root)
/* eslint-disable no-new */
const app = new Vue({
  // el: '#root',
  template: '<div ref="div">this is content {{text}}</div>',
  data: {
    text: 0
  },
  watch: {
    text (newText, oldText) {
      console.log(`${newText} : ${oldText}`)
    }
  }
})
app.$mount('#root')
setInterval(() => {
  app.text += 1
  // app.$data.text += 1
  // 无效
  // app.$options.data.text += 1
}, 1000)

// 属性
// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)
// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }
// console.log(app.$root === app)
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.isServer)

// 方法
// const unWatch = app.$watch('text', (newText, oldText) => {
//   console.log(`${newText} : ${oldText}`)
// })
// 注销watch
// unWatch()
// 事件监听
// app.$on('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })
// app.$once('test', (a, b) => {
//   console.log(`test emited ${a} ${b}`)
// })
// app.$emit('test', 1, 2)
// 强制组件重新渲染
// app.$forceUpdate()

// app.$set(object, 'key', value)
// app.$delete()

// app.$nextTick(() => {})
