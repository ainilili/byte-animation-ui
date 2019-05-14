export default {
    data () {
      return {
        animations: [
            
        ]
      }
    },
    methods: {
      createAnimation() {
        var ulArr = document.querySelectorAll("animation-ul");
        var count = 10;
        for(var i = 0; i < count; i++) {
          this.animations = [
            {name: '1', img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557827901478&di=5d6b3fc033fd3dff90ac8da6d63dc530&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1403%2F12%2F4428217_09_thumb.jpg'}
          ]
        }
      }
    },
    created () {
        this.createAnimation()
    }
  }