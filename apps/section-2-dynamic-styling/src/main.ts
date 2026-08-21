declare const Vue: typeof import('vue');

const { createApp } = Vue;

createApp({
  data() {
    return {
      selectedBox: null,
    };
  },
  computed: {
    // Computed classes (Lesson 37): Offloads class condition logic from templates into readable, testable JS.
    boxAClasses() {
      return { active: this.selectedBox === 'A' };
    },
  },
  watch: {},
  methods: {
    handleBoxClick(boxId: string) {
      this.selectedBox = boxId;
    },
  },
}).mount('#styling');
