<template>
  <div>
    <div class="add-quest-people">
      <input type="button" :value="text" @click="showList">
    </div>
    <div class="people-list" v-if="isShowList">
      <div class="table">
        <div class="wrap">
          <table>
            <tr>
              <th width="10"></th>
              <th width="20">头像</th>
              <th width="20">昵称</th>
              <th width="20">账号</th>
              <th width="30">备注</th>
            </tr>
            <tr v-for="(item,index) in list" :key="item.id" @click="checkedItem(index,item)">
              <td>
                <span :class="{checked: item.checked}"></span>
              </td>
              <td class="img">
                <img :src="item.avatar" alt="">
              </td>
              <td>{{item.name}}</td>
              <!--<td>{{item.account}}</td>-->
              <td>{{item.id}}</td>
              <td>{{item.back}}</td>
            </tr>
          </table>
        </div>
        <div class="btn">
          <button @click="cancle">取消</button>
          <button class="submit" @click="submit">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: 'addQuestionPeople',
  data () {
    return {
      isShowList: false,
      list: [],
      people: '',
      current: [],
      currentClick: -1,
      text: '添加'
    }
  },
  props: ['id'],
  mounted () {
    this.getList()
    // this.list = [
    //   {
    //     id: 1,
    //     name: 'dsfdsf1',
    //     account: 'sfsdf',
    //     back: 'fsdfd'
    //   },
    //   {
    //     id: 2,
    //     name: 'dsfdsf2',
    //     account: 'sfsdf',
    //     back: 'fsdfd'
    //   },
    //   {
    //     id: 3,
    //     name: 'dsfdsf3',
    //     account: 'sfsdf',
    //     back: 'fsdfd'
    //   },
    //   {
    //     id: 4,
    //     name: 'dsfdsf4',
    //     account: 'sfsdf',
    //     back: 'fsdfd'
    //   }
    // ]
    // this.list.forEach((item) => {
    //   item.checked = false
    // })
  },
  methods: {
    showList: function () {
      const _this = this
      if (!_this.isShowList) {
        this.isShowList = true
        // this.axios.post('answer/getSphinxUsersList', {})
        //   .then(function (res) {
        //     _this.list = res.data.data
        //   })
        // this.list = [
        //   {
        //     id: 1,
        //     name: 'dsfdsf1',
        //     account: 'sfsdf',
        //     back: 'fsdfd'
        //   },
        //   {
        //     id: 2,
        //     name: 'dsfdsf2',
        //     account: 'sfsdf',
        //     back: 'fsdfd'
        //   },
        //   {
        //     id: 3,
        //     name: 'dsfdsf3',
        //     account: 'sfsdf',
        //     back: 'fsdfd'
        //   },
        //   {
        //     id: 4,
        //     name: 'dsfdsf4',
        //     account: 'sfsdf',
        //     back: 'fsdfd'
        //   }
        // ]
      }
    },
    cancle: function () {
      this.isShowList = false
    },
    submit: function () {
      this.isShowList = false
      this.$emit('add', this.checkList)
    },
    checkedItem: function (index, item) {
      if (item.checked) {
        this.list[index].checked = false
      } else {
        this.list[index].checked = true
      }
    },
    getList () {
      var _this = this
      this.axios.post('answer/getSphinxUsersList', {})
        .then(function (res) {
          res.data.data.forEach((item) => {
            item.checked = false
          })
          _this.list = res.data.data
        })
    }
  },
  computed: {
    checkList () {
      let arr = []
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].checked) {
          arr.push(this.list[i])
        }
      }
      return arr
    }
  },
  watch: {
    'id': function (newVal, oldVal) {
      this.current = newVal
      for (let i = 0; i < this.list.length; i++) {
        this.list[i].checked = false
      }
      for (let i = 0; i < this.list.length; i++) {
        for (let j = 0; j < this.current.length; j++) {
          if (this.list[i].id === this.current[j]) {
            this.list[i].checked = true
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.add-quest-people{
  text-align: left;
  input{
    width: 2rem;
    line-height: 0.7rem;
    color: #999;
    background: #fff;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 0.1rem;
  }
}
.people-list{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  left: 0;
  top: 0;
  .table{
    width: 90%;
    height: 70%;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 0.1rem;
    padding-bottom: 1rem;
    .wrap{
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
    table{
      table-layout:fixed;
      width: 100%;
    }
    th,td{
      height: 0.6rem;
      line-height: 0.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 50%;
        border: 1px solid #ccc;
        vertical-align: middle;
        &.checked{
          background: red;
        }
      }
    }
    .img{
      img{
        width: 0.3rem;
        height: 0.3rem;
      }
    }
  }
  .btn{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 1rem;
    button{
      width: 1.5rem;
      height: 0.6rem;
      line-height: 0.6rem;
      background: #ddd;
      border-radius: 0.1rem;
      color: #fff;
      &.submit{
        background: orangered;
      }
    }
  }
}
</style>
