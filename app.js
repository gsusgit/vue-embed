Vue.createApp({
  data() {
    return {
      loading: true,
      message: 'Hello world!',
      counter: 0,
      showAlert: false,
      alertMessage: '',
      goal: '',
      goals: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  computed: {
    counterIsZero() {
      return this.counter === 0
    },
    zeroGoals() {
      return this.goals.length === 0
    }
  },
  watch: {
    counter(value) {
      if (value >= 10) {
        this.showAlert = true
        this.alertMessage = 'Max counter reached, resetting...'
        setTimeout(() => {
          this.counter = 0
          this.showAlert = false
        }, 3000)
      } else {
        this.showAlert = false
      }
    }
  },
  methods: {
    add() {
      this.counter++
    },
    remove() {
      if (this.counter > 0) this.counter--
    },
    newGoal() {
      if (this.goals.find((goal) => goal === this.goal)) {
        this.showAlert = true
        this.alertMessage = 'Goal already exists'
        setTimeout(() => {
          this.showAlert = false
        }, 3000)
      } else {
        this.goals.push(this.goal)
        this.goal = ''
      }
    },
    resetGoals() {
      if(window.confirm('Are you sure you want to reset goals?'))
      this.goals = []
    }
  }
}).mount('#app')