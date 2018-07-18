<template>
    <div>
      <div class="common-head">
        <i class="back"></i>
        <p>{{title}}</p>
      </div>
      <p>{{count}}</p>
      <button @click="add"> 加 </button>
    </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: '首页'
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
    }
  }
}
</script>

<style scoped>

</style>
