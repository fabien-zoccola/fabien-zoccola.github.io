import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import Video from "@/views/Video";

import CV from "@/views/CV.vue";
import Experiences from "@/components/cv/Experiences";
import Informations from "@/components/cv/Informations";
import Skills from "@/components/cv/Skills";
import Projects from "@/components/cv/Projects";
import ProjectDetails from "@/components/projects/ProjectDetails";
import Formations from "@/components/cv/Formations";

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
    component: Video,
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
      {
        name: "Formation",
        path: "formations",
        component: Formations,
      },
    ],
  },
  {
    name: "ProjectDetails",
    path: "/project/:slug",
    component: ProjectDetails,
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
