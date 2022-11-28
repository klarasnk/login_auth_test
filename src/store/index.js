import router from "@/router";
import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: {},
    error: "",
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    login({ commit }, data) {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          if ("message" in result) {
            commit("setError", "Invalid Username or Password");
          } else {
            commit("setError", "");
            commit("setUser", result);
            localStorage.setItem("userId", result.id);
            router.push("/profile");
          }
        });
    },
    getUser({ commit }) {
      let userId = localStorage.getItem("userId");
      if (userId) {
        fetch("https://dummyjson.com/users/" + userId)
          .then((res) => res.json())
          .then((result) => {
            commit("setUser", result);
          });
      } else {
        router.push("/");
      }
    },
    logOut({ commit }) {
      localStorage.removeItem("id");
      commit("setUser", {});
      router.push("/");
    },
  },
  modules: {},
});
