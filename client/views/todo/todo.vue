<template>
  <section class="real-app">
    <!-- <div class="tab-container">
      <tabs :value="tabValue" @change="handleChangeTab">
        <tab label="tab1" index="1">
          <span>content 1 {{inputContent}}</span>
        </tab>
        <tab index="2">
          <span slot="label" style="color: red;">tab2</span>
          <span>content 2</span>
        </tab>
        <tab label="tab3" index="3">
          <span>content 3</span>
        </tab>
      </tabs>
    </div> -->
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来去做什么？"
      v-model="inputContent"
      @keyup.enter="addTodo">
    <v-item v-for="todo in filterTodos" :key="todo.id" :todo="todo" @del="deleteTodo"></v-item>
    <v-tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAllCompleted="clearAllCompleted"></v-tabs>
  </section>
</template>

<script>
import vItem from './item.vue'
import vTabs from './tabs.vue'
let id = 0
export default {
  metaInfo: {
    title: 'The Todo App'
  },
  data () {
    return {
      todos: [],
      filter: 'all',
      tabValue: '1',
      inputContent: ''
    }
  },
  computed: {
    filterTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  },
  methods: {
    addTodo (e) {
      if (e.target.value.trim()) {
        this.todos.unshift({
          id: id++,
          content: e.target.value.trim(),
          completed: false
        })
      }
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    },
    handleChangeTab (value) {
      this.tabValue = value
    }
  },
  components: {
    vItem,
    vTabs
  }
}
</script>

<style lang="stylus" scoped>
.real-app
  margin 0 auto
  width 600px
  box-shadow 0 0 5px #666
.add-input
  position relative
  margin 0
  width 100%
  font-size 24px
  font-family inherit
  font-weight inherit
  line-height 1.4em
  border 0
  outline none
  color inherit
  padding 16px 16px 16px 36px
  border 1px solid #999
  // box-shadow inset 0 -1px 5px 0 rgba(0, 0, 0, .9)
  box-sizing border-box
  font-smoothing: antialiased
  border none
  // box-shadow inset 0 -2px 1px rgba(0, 0, 0, .9)
.tab-container
  background-color #fff
  padding 0 15px
</style>
