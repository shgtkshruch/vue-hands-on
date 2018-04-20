const app = new Vue({
  el: '#app',
  data: {
    firstName: '苗字',
    lastName: '名前',
    message: 'Hello World!',
  },
  mounted() {
    setTimeout(() => {
      this.message = 'mounted!';
    }, 2000);
  },
  watch: {
    message(val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal);
    }
  },
  methods: {
    input(event) {
      this.message = event.target.value;
    }
  }
});
