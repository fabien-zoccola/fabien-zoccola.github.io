import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import LandingProfile from "@/components/home/LandingProfile";

import CV from "@/views/CV.vue";
import Experiences from "@/components/cv/Experiences";

const routes = [
  {
    // Home page
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    // CV page
    path: "/cv",
    name: "CV",
    component: CV,
    children: [
      {
        // "main" page of the CV
        // render the default component
        path: "",
        component: LandingProfile,
      },
      {
        path: "experiences",
        component: Experiences,
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () => import("../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
