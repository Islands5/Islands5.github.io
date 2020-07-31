var app = new Vue({
    el: '#app',
    data() {
        return {
          checkedStation: '',
          query: ''
        }
    },
    methods: {
    },
    async created() {
      var restaurants = await fetch('../data/restaurants.json')
      console.log(await restaurants.json())
    }
});