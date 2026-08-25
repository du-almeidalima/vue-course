declare const Vue: typeof import('vue');

const { createApp } = Vue;

type Task = {
  text: string;
  id: string;
};

createApp({
  data() {
    return {
      tasks: [] as Task[],
      taskText: '',
      showTasks: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push({
        text: this.taskText,
        id: Math.random().toString(36).substring(2, 9),
      });
      this.taskText = '';
    },
    removeTask(id: string) {
      this.tasks = this.tasks.filter((task: Task) => task.id !== id);
    },
    toggleShowTasks() {
      this.showTasks = !this.showTasks;
    },
  },
}).mount('#assignment');
