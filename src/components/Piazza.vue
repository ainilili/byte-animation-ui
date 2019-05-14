
<template>
    <div id="app">
        <div class="banner">
            <Button icon="ios-download-outline" type="primary">Upload</Button>
        </div>
        <div class="contains">
            <ul id="animation-ul">
                <animation-list
                v-for="animation in animations"
                v-bind:key="animation.name"
                v-bind:todo="animation"
                ></animation-list>
            </ul>
        </div>
         <button v-on:click="createAnimation">Add 1</button>
    </div>
</template>
<script>
import Vue from 'vue'

export default {
    data () {
      return {
        animations: [
            {name: 1, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
            {name: 2, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
            {name: 3, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
            {name: 4, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'},
        ],
        count: 5
      }
    },
    methods: {
      createAnimation() {
        this.animations.push({name: this.count ++, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'})
      }
    },
    created () {
        // this.createAnimation()
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
.contains {width: 100%; padding: 10px 20px; margin-top: 20px}
.contains ul {
  width: 1280px; 
  overflow: hidden; 
  margin: 0 auto; 
  }
.contains ul li {float: left; width: 300px; padding:5px; border: 1px solid #ccc;}
</style>
