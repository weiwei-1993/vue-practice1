<template>
  <div class="find">
    <div class="common-head">
      <i class="back"></i>
      <p>{{title}}</p>
    </div>
    <div class="input">
      <div class="left">提问者：</div>
      <div class="right">
        <div class="people" v-for="item in people" :key="item.id">
          <div class="close">
            <img src="./../image/common/close.png" alt="" @click="deletePeople(item.id)">
          </div>
          <span>{{item.name}}</span>
          <span>{{item.account}}</span>
          <span>{{item.back}}</span>
        </div>
        <add-question-people v-on:add="addPeople" :id="idList"></add-question-people>
      </div>
    </div>
  </div>
</template>

<script>
import addQuestionPeople from './components/addQuestionPeople'
export default {
  name: 'find',
  data () {
    return {
      people: [],
      title: '发现'
    }
  },
  components: {
    addQuestionPeople
  },
  methods: {
    removal: function (arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i].id === arr[j].id) {
            arr.splice(j, 1)
          }
        }
      }
      return arr
    },
    addPeople: function (itemList) {
      // itemList.forEach((item) => {
      //   this.people.push(item)
      // })
      this.people = itemList
      this.removal(this.people)
    },
    deletePeople: function (id) {
      for (let i = 0; i < this.people.length; i++) {
        if (id === this.people[i].id) {
          this.people.splice(i, 1)
          break
        }
      }
      for (let i = 0; i < this.idList.length; i++) {
        if (id === this.idList[i]) {
          this.idList.splice(i, 1)
          break
        }
      }
    }
  },
  computed: {
    idList () {
      let arr = []
      for (let i = 0; i < this.people.length; i++) {
        arr.push(this.people[i].id)
      }
      return arr
    }
  }
}
</script>

<style scoped lang="less">
.common-head{
  .back{
    background-image: url('./../image/common/return.png');
  }
}
.input{
  display: flex;
  margin-top: 1rem;
  .left{
    width: 1.5rem;
    line-height: 0.7rem;
    font-size: 0.3rem;
    text-align: right;
  }
  .right{
    flex: 1;
    .people{
      position: relative;
      display: flex;
      width: 5rem;
      border: 1px solid #ccc;
      margin-right: 0.7rem;
      background: #fff;
      margin-bottom: 0.3rem;
      .close{
        position: absolute;
        right: -0.5rem;
        top: 0.15rem;
        width: 0.4rem;
        height: 0.4rem;
        font-size: 0;
        img{
          width: 100%;
        }
      }
      span{
        flex: 1;
        font-size: 0.2rem;
        line-height: 0.7rem;
        color: #444;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
