<template>
  <div class="find headerTop">
    <div class="common-head">
      <i class="back"></i>
      <p>{{title}}</p>
    </div>

    <!--父子组件传值-->
    <div class="div-block"></div>
    <h2 class="title">1.父子组件传值</h2>
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

    <!--图片上传-->
    <div class="div-block"></div>
    <h2 class="title">2.图片上传</h2>
    <el-upload
      class="avatar-uploader"
      action="https://app1.shiyujia.com/admin/uploads/answer"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
import addQuestionPeople from './components/addQuestionPeople'
export default {
  name: 'find',
  data () {
    return {
      people: [],
      title: '小功能',
      imageUrl: '',
      url: 'https://app1.shiyujia.com/answer/admin/uploads/answer'
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
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error({
          message: '上传头像图片只能是 JPG 格式!',
          customClass: 'w-error'
        })
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
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

<style lang="less">
.common-head{
  .back{
    background-image: url('./../image/common/return.png');
  }
}
.title{
  text-indent: 0.3rem;
  line-height: 1rem;
  text-align: left;
  background: #fff;
  font-size: 0.3rem;
}
.input{
  display: flex;
  padding: 0.5rem 0;
  background: #fff;
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
.avatar-uploader{
  background: #fff;
  .el-upload{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover{
      border-color: #409EFF;
    }
  }
  &-icon{
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.w-error{
  top: 0.8rem;
}
</style>
