<template>
    <div class="tabs">
      <ul>
        <li v-for="item in tabs" :key="item.text">
          <router-link :to="item.url" tag="div" active-class = "active" class="tab" :class="item.class"></router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
      tabs: [
        {
          text: '首页',
          class: 'home',
          url: '/Main/home'
        },
        {
          text: '投资',
          class: 'bankBillList',
          url: '/Main/bankBillList'
        },
        {
          text: '发现',
          class: 'find',
          url: '/Main/find'
        },
        {
          text: '我的',
          class: 'myaccountHome',
          url: '/Main/myaccountHome'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.tabs{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  z-index: 100;
  ul{
    display: flex;
    li{
      flex: 1;
      text-align: center;
      padding: 0.02rem 0;
      .tab{
        width: 1rem;
        height: 1rem;
        margin: 0 auto;
        &.home{
          background: url("../image/nav/default/ico_home.png") no-repeat center/contain;
          &.active{
            background: url("../image/nav/big/ico_home.png") no-repeat center/contain;
          }
        }
        &.bankBillList{
          background: url("../image/nav/default/ico_fund.png") no-repeat center/contain;
          &.active{
            background: url("../image/nav/big/ico_fund.png") no-repeat center/contain;
          }
        }
        &.find{
          background: url("../image/nav/default/ico_more.png") no-repeat center/contain;
          &.active{
            background: url("../image/nav/big/ico_more.png") no-repeat center/contain;
          }
        }
        &.myaccountHome{
          background: url("../image/nav/default/ico_account.png") no-repeat center/contain;
          &.active{
            background: url("../image/nav/big/ico_account.png") no-repeat center/contain;
          }
        }
      }
    }
  }
}
</style>
