<template>
  <div id="app">
    <div id="cover"></div>
    <v-header></v-header>
    <!-- <v-todo></v-todo> -->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- <notification content="test notificaty"></notification> -->
    <!-- <button @click="notify">click me</button> -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './layout/header.vue'
import vFooter from './layout/footer.jsx'
// import vTodo from './views/todo/todo.vue'
// import { mapState } from 'vuex'

export default {
  name: 'app',
  metaInfo: {
    title: 'Tonny\'s Todos App'
  },
  data () {
    return {}
  },
  methods: {
    notify () {
      this.$notify({
        content: 'test $notify',
        btn: 'close'
      })
    }
  },
  components: {
    vHeader,
    vFooter
    // vTodo
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
