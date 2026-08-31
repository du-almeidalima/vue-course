<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Friend } from '../App.vue';

export default defineComponent({
  name: 'FriendContact',
  props: {
    friend: {
      type: Object as PropType<Friend>,
      required: true,
    },
  },
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
  },
});
</script>

<template>
  <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails">{{ showDetails ? 'Hide' : 'Show' }} Details</button>
  <ul v-if="showDetails">
    <li><strong>Phone:</strong> {{ friend.phone }}</li>
    <li><strong>Email:</strong> {{ friend.email }}</li>
  </ul>
</template>

<style scoped></style>
