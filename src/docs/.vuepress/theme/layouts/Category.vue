<template>
  <div class="categories-wrapper" :class="recoShow ?'reco-show' : 'reco-hide'">
    <!-- 公共布局 -->
    <Common :sidebar="false" :isComment="false">
      <!-- 分类集合 -->
      <ul class="category-wrapper">
        <li 
          class="category-item"
          :class="title.trim() == item.name ? 'active': ''"
          v-for="(item, index) in this.$categories.list" 
          :key="index">
          <router-link :to="item.path">
            <span class="category-name">{{ item.name }}</span>
            <span class="post-num">{{ item.posts.length }}</span>
          </router-link>
        </li>
      </ul>

      <!-- 博客列表 -->
      <note-abstract 
        class="list"
        :data="posts"
        :currentPage="currentPage"
        @currentTag="getCurrentTag"></note-abstract>
      
      <!-- 分页 -->
      <pagation 
        class="pagation"
        :data="posts"
        :currentPage="currentPage"
        @getCurrentPage="getCurrentPage"></pagation>
    </Common>
  </div>
</template>

<script>
import Common from '@theme/components/Common.vue'
import NoteAbstract from '@theme/components/NoteAbstract.vue'
import Pagation from '@theme/components/Pagation.vue'

export default {
  components: { Common, NoteAbstract, Pagation },

  data () {
    return {
      // 当前页码
      currentPage: 1,
      recoShow: false
    }
  },

  computed: {
    // 时间降序后的博客列表
    posts () {
      let posts = this.$category.posts
      posts.sort((a, b) => {
        return this._getTimeNum(b) - this._getTimeNum(a)
      })
      this.getCurrentPage(1)
      return posts
    },
    // 标题只显示分类名称
    title () {
      return this.$frontmatter.title.split('|')[0]
    }
  },

  mounted () {
    this.recoShow = true
  },

  methods: {
    // 获取当前tag
    getCurrentTag (tag) {
      this.$emit('currentTag', tag)
    },
    // 获取当前页码
    getCurrentPage (page) {
      this.currentPage = page
      this.$page.currentPage = page
    },
    // 获取时间的数字类型
    _getTimeNum (date) {
      return parseInt(new Date(date.frontmatter.date).getTime())
    }
  }
}
</script>

<style src="../styles/theme.styl" lang="stylus"></style>

<style lang="stylus" scoped>
@require '../styles/loadMixin.styl'
.categories-wrapper
  max-width: 740px;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0; 
  .category-wrapper {
    list-style none
    padding-left 0
    .category-item {
      vertical-align: middle;
      margin: 4px 8px 10px;
      display: inline-block;
      cursor: pointer;
      border-radius: 2px;
      font-size: 13px;
      box-shadow 0 1px 4px 0 rgba(0,0,0,0.2)
      transition: all .5s
      &:hover, &.active {
        background $accentColor
        a span.category-name {
          color #fff
          .post-num {
            color $accentColor
          }
        }
      }
      a {
        display flex
        box-sizing border-box
        width 100%
        height 100%
        padding: 8px 14px;
        justify-content: space-between
        align-items center
        color: #666
        .post-num {
          margin-left 4px
          width 1.2rem;
          height 1.2rem
          text-align center
          line-height 1.2rem
          border-radius 50%
          background #eee
          font-size 1rem
        }
      }
    }
  }
  &.reco-hide
    .category-wrapper, .list, .pagation
      load-start()
  &.reco-show {
    .category-wrapper {
      load-end(0.08s)
    }
    .list {
      load-end(0.16s)
    }
    .pagation {
      load-end(0.24s)
    }
  }  

@media (max-width: $MQMobile)
  .categories-wrapper
    padding: 4.6rem 1rem 0;
  .page-edit
    .edit-link
      margin-bottom .5rem
    .last-updated
      font-size .8em
      float none
      text-align left
</style>