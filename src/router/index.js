import SignInVue from "@/views/SignIn.vue";
import UserProfileVue from "@/views/UserProfile.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "signin",
    component: SignInVue,
  },
  {
    path: "/profile",
    name: "profile",
    component: UserProfileVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
