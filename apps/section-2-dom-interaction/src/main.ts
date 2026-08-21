declare const Vue: typeof import('vue');

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
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
