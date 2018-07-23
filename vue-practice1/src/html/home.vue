<template>
  <div class="hacker-news-list">
    <div class="hacker-news-header">
      <a target="_blank" href="http://www.ycombinator.com/">
        <img src="https://news.ycombinator.com/y18.gif">
      </a>
      <span>Hacker News</span>
    </div>
    <div class="hacker-news-item" v-for="(item, key) in list" :key="key">
      <span class="num" v-text="key + 1"></span>
      <p>
        <a target="_blank" :href="item.url" v-text="item.title"></a>
      </p>
      <p>
        <small>
          <span v-text="item.points"></span>
          points by
          <a target="_blank" :href="'https://news.ycombinator.com/user?id=' + item.author"
             v-text="item.author"></a>
          |
          <a target="_blank" :href="'https://news.ycombinator.com/item?id=' + item.objectID"
             v-text="item.num_comments + ' comments'"></a>
        </small>
      </p>
    </div>
    <infinite-loading @infinite="infiniteHandler">
    <span slot="no-more">
      There is no more Hacker News :(
    </span>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
// const api = 'http://hn.algolia.com/api/v1/search_by_date?tags=story'
export default {
  name: 'home',
  data () {
    return {
      title: '首页',
      list: [],
      currentPage: 0
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  created: function () {
    // this.axios.post('/index/index.dos', {})
    //   .then(function (res) {
    //     console.log(1)
    //   })
    //   .catch(function (res) {
    //     console.log(2)
    //   })
  },
  methods: {
    getIndex: function () {
      console.log(this.aa)
    },
    add: function () {
      this.$store.state.count++
    },
    infiniteHandler ($state) {
      // const _this = this
      setTimeout(() => {
        // this.axios.get(api, {
        //   params: {
        //     page: _this.list.length / 20 + 1
        //   }
        // })
        //   .then(function (data) {
        //     if (data.hits.length) {
        //       _this.list = _this.list.concat(data.hits)
        //       $state.loaded()
        //     }
        //   })
      })
    }
  },
  components: {
    InfiniteLoading
  }
}
</script>

<style scoped lang="less">

</style>
