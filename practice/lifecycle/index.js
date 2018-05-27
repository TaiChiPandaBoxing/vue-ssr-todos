import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  template: '<div>{{text}</div>',
  data: {
    text: 'aaa'
  },
  beforeCreate () {
    console.log(this, 'beforeCreate')
  },
  created () {
    console.log(this, 'created')
  },
  beforeMount () {
    console.log(this, 'beforeMount')
  },
  mounted () {
    console.log(this, 'mounted')
  },
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () {
    console.log(this, 'activated')
  },
  deactivated () {
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  },
  render (h) {
    throw new TypeError('render error')
    // console.log('render function invoked')
    // return h('div', {}, this.text)
  },
  // 只关心自己是否构建成功，不关心子组件的错误，只用在开发环境
  renderError (h, error) {
    return h('div', {}, error.stack)
  },
  errorCaptured () {
    // 会向上冒泡，并且正式环境可以使用
  }
})
