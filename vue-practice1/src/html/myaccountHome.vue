<template>
    <div class="headerTop">
      <div class="common-head">
        <i class="back"></i>
        <p>{{title}}</p>
      </div>
      <div class="search">
        <input type="text" placeholder="搜索" v-model="searchText">
        <span @click="search">查找</span>
      </div>
      <div class="list">
        <table>
          <tr>
            <th>操作者</th>
            <th>操作时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="item in logList" :key="item.id">
            <td>{{item.name}}</td>
            <td>{{item.created_at}}</td>
            <td>{{item.content}}</td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
export default {
  name: 'myaccountHome',
  data () {
    return {
      title: '我的',
      logList: [],
      searchText: ''
    }
  },
  created: function () {
    const token = sessionStorage.getItem('token')
    if (token === null || token === undefined) {
      this.$router.push('/login')
    } else {
      const _this = this
      this.axios.post('logs/index', {})
        .then(function (res) {
          if (res.code === 1) {
            _this.logList = res.data.data
          }
        })
    }
  },
  methods: {
    search: function () {
      const _this = this
      this.axios.post('logs/index', {keyword: _this.searchText})
        .then(function (res) {
          if (res.code === 1) {
            _this.logList = res.data.data
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
  html,body{
    background: #fff!important;
  }
  .common-head{
    .back{
      background-image: url('./../image/common/return.png');
    }
  }
  .search{
    position: relative;
    background: #eee;
    text-align: center;
    padding: 0.3rem 0;
    input{
      width: 90%;
      height: 1rem;
      border-radius: 0.1rem;
      outline: none;
      border: 0;
      text-indent: 0.1rem;
    }
    span{
      position: absolute;
      right: 0.6rem;
      top: 0.45rem;
      width: 1.6rem;
      height: 0.7rem;
      background: @blue;
      color: #fff;
      text-align: center;
      border-radius: 0.2rem;
      line-height: 0.7rem;
      font-size: 0.3rem;
    }
  }
  .list{
    width: 100%;
    background: #fff;
    padding: 0.3rem 0.3rem;
    margin-bottom: 1rem;
    table{
      th{
        background: #eee;
        width: 33%;
        font-weight: bold;
      }
      tr{
        border-bottom: 1px solid #ddd;
        line-height: 0.8rem;
        &:first-child{
          border-top: 1px solid #ddd;
        }
        &:nth-child(odd){
          background: #fafafa;
        }
      }
    }
  }
</style>
