declare const Vue: typeof import('vue');

const {createApp} = Vue;

// Section 1 - Getting Started
// const buttonEl = document.querySelector('button')!;
// const inputEl = document.querySelector('input')!;
// const listEl = document.querySelector('ul')!;
//
// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }
//
// buttonEl.addEventListener('click', addGoal);

// This exposes methods/data that can be bound to the template that is mounted
createApp({
  // Returns the reactive state for this component instance (goals, enteredValue)
  data() {
    return {
      goals: [] as string[],
      enteredValue: ''
    };
  },
  methods: {
    handleAddGoal() {
      this.goals.push(this.enteredValue);
    }
  }
})
// mount() renders the component into the DOM element matching '#app',
// replacing its static HTML with Vue's reactive, virtual-DOM-driven output
  .mount('#app');
