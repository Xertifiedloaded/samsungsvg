var Slider = {
    data() {
        return {
            images: ['./images/svr1.jpg', './images/svr2.jpg', './images/svr3.jpg', './images/svr-side.jpg'],
            timer: null,
            currentIndex: 0
        }
    },
    mounted: function () {
        this.startSlide();
    },
    methods: {
        startSlide: function () {
            this.timer = setInterval(this.next, 4000);
        },

        next: function () {
            this.currentIndex += 1;
        },
        prev: function () {
            this.currentIndex -= 1;
        }
    },
    computed: {
        currentImg: function () {
            return this.images[Math.abs(this.currentIndex) % this.images.length];
        }
    },
    template: `<div style="position: relative; width:80%; margin: 0 auto;" v-for="i in [currentIndex]" :key="i">
    <img :src="currentImg" style="height: 600px; width:100%;"/>
  </div>`
}

new Vue({
    el: '#app',
    components: {
        Slider
    }
});