
<template>
    <div id="app">
        <div class="banner">
            <Button icon="ios-download-outline" type="primary">Upload</Button>
        </div>
        <div class="contains">
            <ul>
                <animation-list
                v-for="animation in animations"
                v-bind:key="animation.name"
                v-bind:todo="animation"
                ></animation-list>
            </ul>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
  data () {
    return {
      animations: [
        {name: '1', img: 'http://img1.imgtn.bdimg.com/it/u=646689937,1553666340&fm=11&gp=0.jpg'},
        {name: '2', img: 'http://img2.imgtn.bdimg.com/it/u=3284165984,681808818&fm=26&gp=0.jpg'},
        {name: '3', img: 'http://img0.imgtn.bdimg.com/it/u=2546714481,3339179299&fm=11&gp=0.jpg'},
        {name: '4', img: 'http://img2.imgtn.bdimg.com/it/u=907818336,3106913576&fm=11&gp=0.jpg'},
        {name: '5', img: 'http://img4.imgtn.bdimg.com/it/u=2184930049,3895733545&fm=11&gp=0.jpg'},
        {name: '6', img: 'http://img1.imgtn.bdimg.com/it/u=646689937,1553666340&fm=11&gp=0.jpg'},
        {name: '7', img: 'http://img2.imgtn.bdimg.com/it/u=3284165984,681808818&fm=26&gp=0.jpg'},
        {name: '8', img: 'http://img0.imgtn.bdimg.com/it/u=2546714481,3339179299&fm=11&gp=0.jpg'},
        {name: '9', img: 'http://img2.imgtn.bdimg.com/it/u=907818336,3106913576&fm=11&gp=0.jpg'},
        {name: '0', img: 'http://img4.imgtn.bdimg.com/it/u=2184930049,3895733545&fm=11&gp=0.jpg'}
      ]
    }
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
.contains ul {width: 1240px; overflow: hidden; margin: 0 auto}
.contains ul li {float: left; width: 300px; overflow: hidden; padding:5px; border: 1px solid #ccc;}
</style>
