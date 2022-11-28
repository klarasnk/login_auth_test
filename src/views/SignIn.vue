<template>
  <div class="sign-in">
    <form @submit.prevent="login(user)">
      <div class="sign-in-text">
        <h2>Sign In</h2>
        <p class="error" v-if="error">{{ error }}</p>
      </div>
      <div>
        <input type="text" placeholder="Username" v-model="user.username" />
      </div>
      <div>
        <input type="password" placeholder="Password" v-model="user.password" />
      </div>
      <button>Sign In</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "SignIn",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  created() {
    this.getUser();
  },
  computed: {
    ...mapState(["error"]),
  },
  methods: {
    ...mapActions(["login", "getUser"]),
  },
};
</script>
