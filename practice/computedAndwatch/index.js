import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  template: `
    <div :id="box" @click="handleClick" :class="[{active: isActive}]" :style="[styles1, styles2]">
      {{isActive ? 'active' : 'not active'}}
      <p v-html='html'></p>
      <span>{{getJoinClassArray}}</span>
    </div>
  `,
  data: {
    isActive: false,
    html: '<span>123</span>',
    array: [1, 2, 3],
    box: 'boxId',
    styles1: {
      color: 'red',
      appearance: 'none'
    },
    styles2: {
      color: 'orange'
    }
  },
  computed: {
    // 绑定多个动态的class，可以利用computed返回一个拼接的值
    className () {
      return 'classA classB'
    }
  },
  methods: {
    handleClick () {
      alert('clicked') // eslint-disable-line
    },
    getJoinClassArray (array) {
      return array.join(' ')
    }
  }
})
