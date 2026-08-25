declare const Vue: typeof import('vue');

const { createApp } = Vue;

type Goal = { id: string; text: string };

const app = createApp({
  data() {
    return {
      newGoal: '',
      goals: [] as Goal[],
    };
  },
  methods: {
    // Array Reactivity & Unique Keys:
    // Vue wraps mutating array methods (push, splice, pop, shift, unshift, sort, reverse)
    // to automatically trigger DOM updates for v-for lists and v-if conditions.
    // Generating unique IDs ensures stable :key bindings for reliable Virtual DOM diffing.
    addGoal() {
      const id = Math.random().toString(36).substring(2, 9);
      this.goals.push({ id, text: this.newGoal });
      this.newGoal = '';
    },
    // Array Mutation (splice):
    // Modifies the array in-place by removing 1 element at the specified index,
    // which Vue intercepts to trigger reactive DOM removal without a full list re-render.
    removeGoal(index: number) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount('#user-goals');
