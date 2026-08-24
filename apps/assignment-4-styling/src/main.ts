declare const Vue: typeof import('vue');

const { createApp } = Vue;

createApp({
  data() {
    return {
      userClass: 'user1',
      visible: true,
      backgroundColor: '',
    };
  },
  computed: {},
  watch: {},
  methods: {
    toggleVisibility() {
      this.visible = !this.visible;
    },
  },
}).mount('#assignment');
