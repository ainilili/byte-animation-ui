<template>
  <div id="app">
    <div class="banner">
        <Button icon="ios-download-outline" type="primary">Upload</Button>
    </div>
    <router-view class="router-view"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.banner {width: 100%; padding: 10px 20px; overflow: hidden}
.banner button {float: right; margin-right: 20px}
</style>
