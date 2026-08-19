declare const Vue: typeof import('vue');

const { createApp } = Vue;

createApp({
  data() {
    return {
      courseGoal: ['Finish the course and learn Vue!', 'Master Vue!'],
      htmlCourseGoal: '<span>Become a <i>Vue</i> enjoyer!</span>',
      vueLink: 'https://vuejs.org/',
      counter: 0,
    };
  },
  // Vue proxies properties returned by data() onto the component instance ('this').
  // Inside methods, 'this' refers to the Vue instance, allowing direct access to the reactive state
  // (e.g., this.courseGoal). Note: Avoid arrow functions here so Vue can correctly bind 'this'.
  methods: {
    getRandomGoal() {
      console.log('[getRandomGoal]: Called');
      const randomIndex = Math.floor(Math.random() * this.courseGoal.length);

      return this.courseGoal[randomIndex];
    },
    incrementCounter() {
      this.counter++;
    },
  },
}).mount('#user-goal');
