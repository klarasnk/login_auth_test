<template>
  <div class="user-profile-page">
    <div class="user-profile">
      <img :src="user.image" />
      <div class="user-info">
        <h1>{{ user.firstName }} {{ user.lastName }}</h1>
        <h5>Email: {{ user.email }}</h5>
        <h5>Gender: {{ user.gender }}</h5>
        <h5>Eye Color: {{ user.eyeColor }}</h5>
        <h5>Height: {{ user.height }}</h5>
      </div>
    </div>
    <button @click="logOut">Log Out</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "UserProfile",
  created() {
    this.getUser();
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["getUser", "logOut"]),
  },
};
</script>
