<template>
  <div id="app">
    <div class="banner" >
        <h2 style="float:left;cursor:pointer" @click="home">BYTE BY NICO</h2>
        <Button class="banner-item" icon="ios-download-outline" type="primary" v-if="token" @click="upload">Upload</Button>
        <Button class="banner-item" icon="logo-dribbble" type="primary" v-if="!token" @click="login">Login</Button>
        <Button class="banner-item" icon="ios-exit" type="warning" v-if="token" @click="exit">Exit</Button>
        <div class="demo-avatar banner-item" v-if="token">
          <Avatar style="color: #f56a00;background-color: #fde3cf">{{this.nickname[0]}}</Avatar>
      </div>
    </div>
    <router-view class="router-view"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {
      nickname: '',
      token:''
    }
  },
  methods: {
    exit(){
      localStorage.removeItem("nickname")
      localStorage.removeItem("token")
      window.location.reload()
    },
    login(){
      this.$router.push({name:'Login'})
    },
    upload(){
      this.$router.push({name:'Upload'})
    },
    home (){
      this.$router.push({name:'Home'})
    }
  },
  created (){
    this.nickname = localStorage.getItem("nickname")
    this.token = localStorage.getItem("token")
  },
  watch: {
    "$route": function (to, from) {
      this.nickname = localStorage.getItem("nickname")
      this.token = localStorage.getItem("token")
      console.log("watch")
　　}
  }
}
</script>

<style>
.banner {width: 100%; padding: 10px 20px; overflow: hidden}
.banner .banner-item {float: right; margin-right: 20px}
</style>
