<template>
  <header>
    <h1>FriendList</h1>
  </header>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li v-for="friend in friends" :key="friend.id">
        <FriendContact :friend="friend" />
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FriendContact from './components/FriendContact.vue';

export interface Friend {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export default defineComponent({
  name: 'App',
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
      ] as Friend[],
    };
  },
});
</script>

<style></style>
