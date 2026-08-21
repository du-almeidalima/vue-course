declare const Vue: typeof import('vue');

const { createApp } = Vue;

const RESULT = 37;
let timer: ReturnType<typeof setTimeout> | undefined;

createApp({
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    result() {
      if (this.counter === RESULT) {
        return this.counter;
      }

      return this.counter < RESULT ? 'Not there yet' : 'Too much! ';
    },
  },
  watch: {
    result(currentValue: string | number, previousValue: string | number) {
      console.log(`Result changed from ${previousValue} to ${currentValue}`);

      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        this.counter = 0;
      }, 5000);
    },
  },
  methods: {
    handleCounterClick(amount: number) {
      this.counter += amount;
    },
  },
}).mount('#assignment');
