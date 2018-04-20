const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!'
  },
  mounted() {
    this.message = 'mounted!';
  },
  watch: {
    message(val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal);
    }
  },
});
