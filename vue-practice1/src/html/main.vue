<template>
  <div>
    <router-view></router-view>
    <tabs></tabs>
  </div>
</template>

<script>
import tabs from './tabs.vue'
export default {
  name: 'Main',
  data () {
    return {}
  },
  components: { tabs }
}
</script>

<style scoped lang="less">
.tabs {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;

  ul {
    display: flex;

    li {
      flex: 1;
      text-align: center;
      line-height: 0.6rem;
      font-size: 0.3rem;
    }

  }
}
</style>
