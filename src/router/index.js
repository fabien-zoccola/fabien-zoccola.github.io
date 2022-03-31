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
    // CV page
    path: "/cv",
    name: "CV",
    component: asyncRoute("views/CV"),
    children: [
      {
        // "main" page of the CV
        // render the default component
        name: "Présentation",
        path: "",
        component: asyncRoute("components/cv/Informations"),
      },
      {
        name: "Expériences",
        path: "experiences",
        component: asyncRoute("components/cv/Experiences"),
      },
      {
        name: "Compétences",
        path: "skills",
        component: asyncRoute("components/cv/Skills"),
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
