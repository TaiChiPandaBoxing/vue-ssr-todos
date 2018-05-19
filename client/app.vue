<template>
  <div id="app">
    <div id="cover"></div>
    <v-header></v-header>
    <v-todo></v-todo>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './layout/header.vue'
import vFooter from './layout/footer.jsx'
import vTodo from './views/todo/todo.vue'

export default {
  name: 'component_name',
  data () {
    return {}
  },
  components: {
    vHeader,
    vFooter,
    vTodo
  }
}
</script>

<style lang="stylus" scoped>
#app
  position absolute
  left 0
  right 0
  top 0
  bottom 0
#cover
  position absolute
  left 0
  right 0
  top 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
</style>
