<template>
  <div class="theme-container">
    <div class="content">
      <img :src="$themeConfig.fourOhFour" :width="350" :height="400" alt="">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here. That's a Four-Oh-Four. Looks like we've got some broken links.`
]

export default {
  methods: {
    getMsg () {
      return msgs[0]
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
.content {
  margin 4rem auto 0
  max-width 800px
  padding 0 2rem
}
</style>

