<template>
  <div class="hello">
    <Swiper v-if="list.length > 0" class="swiper">
      <Slide v-for="(item,index) in list" :key="index">
        {{item.title}}
      </Slide>
    </Swiper>
    <router-link to="/main.home">homg</router-link>

  </div>
</template>

<script>
import { Swiper, Slide } from 'vue-swiper-component'
export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [ // 123
        {
          title: '111111111',
          style: {
            background: 'url(assets/logo.png)'
          }
        },
        {
          title: '2222222222',
          style: {
            background: 'url(assets/logo.png)'
          }
        },
        {
          title: '333333333333',
          style: {
            background: 'url(assets/logo.png)'
          }
        }
      ],
      sliderinit: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        autoplay: 1000,
        loop: true,
        direction: 'vertical',
        infinite: 1,
        slidesToScroll: 1
      }
    }
  },
  components: {
    Swiper,
    Slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .swiper{
    height: 100px;
    color: @blue;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
