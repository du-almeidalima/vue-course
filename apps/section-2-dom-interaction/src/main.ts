declare const Vue: typeof import('vue');

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      confirmedName: '',
    };
  },
  computed: {
    // Calling this as a method in the template ({{ fullName() }}) is bad:
    // Vue can't track its dependencies, so it re-runs on every render.
    // As a computed property, it caches and only recomputes when `name` or `lastName` changes.
    fullName() {
      if (!this.name && !this.lastName) return '';

      return `${this.name} ${this.lastName}`.trim();
    },
  },
  watch: {
    // Watchers observe a reactive property (data or computed) and execute side effects when it changes.
    // Unlike computed properties (which return values for the template), watchers are best for tasks like
    // running async operations, setting timers, or logging. They receive (newValue, oldValue) automatically.
    counter(currentValue, previousValue) {
      console.log('Counter changed from ' + previousValue + ' to ' + currentValue);
    },
  },
  methods: {
    add(amount: number) {
      this.counter += amount;
    },
    subtract(amount: number) {
      this.counter -= amount;
    },
    setName(event: Event) {
      if (event.target instanceof HTMLInputElement) {
        this.name = event.target.value;
      }
    },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    setConfirmedName(event: Event) {
      if (event.target instanceof HTMLInputElement) {
        this.confirmedName = event.target.value;
      }
    },
    handleSubmit(event: SubmitEvent) {
      // This is done with the event modifier submit.prevent
      // event.preventDefault();
      if (event.target instanceof HTMLFormElement) {
        const formData = new FormData(event.target);
        const title = formData.get('title');
        if (typeof title === 'string') {
          alert(`Form submitted with: ${title}`);
        }
      }
    },
  },
}).mount('#events');
