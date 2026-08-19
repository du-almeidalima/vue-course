declare const Vue: typeof import('vue');

const createApp = Vue.createApp;

createApp({
  data() {
    return {
      name: 'Edu',
      age: 99,
      imageLink:
        'https://images.unsplash.com/photo-1645759152467-3b740319b38a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      inputValue: 'Vue managed value!',
    };
  },
  methods: {
    getRandomNumber() {
      return Math.round(Math.random());
    },
  },
}).mount('#assignment');
