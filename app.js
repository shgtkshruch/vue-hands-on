const app = new Vue({
  el: '#app',
  data: {
    firstName: '苗字',
    lastName: '名前',
    message: 'Hello World!',
    styleObject: {
      color: 'white',
      backgroundColor: 'red',
      padding: '0.5rem',
      textAlign: 'center',
    },
    showMessage: true,
    tasks: []
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
    },
    checkbox(event) {
      this.showMessage = !this.showMessage;
    },
    addTask(event) {
      const task = { text: event.target.value, done: false };
      event.target.value = '';
      this.tasks.push(task);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    done(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
    taskClass(index) {
      if (this.tasks[index].done) {
        return 'textDecoration: line-through';
      } else {
        return 'textDecoration: none';
      }
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
});
