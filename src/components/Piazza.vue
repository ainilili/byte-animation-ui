
<template>
    <div id="app">
        <div class="banner">
            <Button icon="ios-download-outline" type="primary">Upload</Button>
        </div>
        <div class="contains">
            <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import vueWaterfallEasy from 'vue-waterfall-easy'

export default {
    data () {
      return {
        imgsArr:[
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
          {href:'',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'}
        ],
        group: 8,
        height: '1000px'
      }
    },
    methods: {
      createAnimation() {
        this.animations.push({name: this.count ++, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'})
      },
      getData(){
        this.imgsArr.push({href:'https://www.baidu.com',src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'})
        this.group ++;
      }
    },
    created () {
       this.getData();
    },
    components: {
      vueWaterfallEasy
    }
  }
Vue.component('animation-list', {
  props: ['todo'],
  template: `
  <li>
    <img :src='todo.img' style="width:290px"/>
    <h1>{{todo.name}}</h1>
  </li>
  `
})


</script>

<style scoped>
.banner {width: 100%; padding: 10px 20px;}
.banner button {float: right}
.contains{height:1000px; }
</style>
