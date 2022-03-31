import { createRouter, createWebHashHistory } from "vue-router";

function asyncRoute(path) {
  return () => import(`@/${path}`);
}

import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    // Home page
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/video",
    name: "Video",
    component: asyncRoute("views/Video"),
  },
  {
    path: "/presentation",
    name: "Présentation",
    component: asyncRoute("views/Presentation"),
  },
  {
    // CV page
    path: "/cv",
    name: "CV",
    component: asyncRoute("views/CV"),
    children: [
      {
        name: "Expériences",
        path: "experiences",
        component: asyncRoute("components/cv/Experiences"),
      },
      {
        name: "Compétences",
        path: "skills",
        component: asyncRoute("components/cv/Skills"),
        alias: "",
      },
      {
        name: "Projets",
        path: "projects",
        component: asyncRoute("components/cv/Projects"),
      },
      {
        name: "Formation",
        path: "formations",
        component: asyncRoute("components/cv/Formations"),
      },
    ],
  },
  {
    name: "ProjectDetails",
    path: "/project/:slug",
    component: asyncRoute("components/projects/ProjectDetails"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
