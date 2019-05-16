<template>
    <div id="app">
        <div class="contains">
            <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="list(page ++, 5)" :maxCols="4">
              <div class="img-info" slot-scope="props">
                <div class="img-tap">
                  <span>{{props.value.type}}</span>
                </div>
                <p class="img-title">
                  {{props.value.title}}
                </p>
              </div>
            </vue-waterfall-easy>
        </div>
    </div>
</template>
<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import axios from 'axios'

var app = null;

export default {
    data () {
      return {
        imgsArr:[
        ],
        group: 1,
        height: '1000px',
        page: 1
      }
    },
    methods: {
      list(page, size){
        axios.get(this.HOST + '/animation/', {
          params: {
            page: page,
            size: size
          }
        })
        .then(function (response) {
          var data = response.data;
          if(data.code == 200){
            for(var i in data.data.list){
              var animation = data.data.list[i];
              app.imgsArr.push({
                href: '/#/animation/' + animation.id,
                src: animation.coverUrl,
                title: animation.title,
                type: animation.nativeSuffix
              })
              app.group ++;
            }
          }

        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    created () {
       this.list(this.page ++, 5);
       this.list(this.page ++, 5);
       this.list(this.page ++, 5);
       this.list(this.page ++, 5);
       this.list(this.page ++, 5);
       this.list(this.page ++, 5);
       this.list(this.page ++, 5);
       this.list(this.page ++, 5);
       app = this;
    },
    components: {
      vueWaterfallEasy
    }
  }

</script>

<style scoped>
.contains{height:1000px; }
.img-info{
  white-space:normal;
  word-wrap:break-word;
  word-break:break-all;
}
.img-info .img-tap{
  float: left;
  margin-top: 5px;
  padding: 0px 5px;
}
.img-info .img-tap span{
  background: rgb(86, 180, 209);
  color: #fff;
  padding: 2px 5px;
  font-size: 1ex;
  border-radius: 5px
}
.img-info .img-title{
  font-size: 13px;
  color: #333;
  padding: 5px
}
</style>
