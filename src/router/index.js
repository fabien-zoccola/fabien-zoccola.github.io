import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";

import CV from "@/views/CV.vue";
import Experiences from "@/components/cv/Experiences";
import Informations from "@/components/cv/Informations";
import Skills from "@/components/cv/Skills";
import Projects from "@/components/cv/Projects";

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
        name: "Présentation",
        path: "",
        component: Informations,
      },
      {
        name: "Expériences",
        path: "experiences",
        component: Experiences,
      },
      {
        name: "Compétences",
        path: "skills",
        component: Skills,
      },
      {
        name: "Projets",
        path: "projects",
        component: Projects,
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
