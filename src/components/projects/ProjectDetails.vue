<template>
  <Navbar minimal />

  <nu-attrs
    for="heading"
    text="n b"
    padding="1.5x bottom"
    size="xxl"
    color="special"
  ></nu-attrs>
  <nu-attrs for="list" padding="4x left"></nu-attrs>

  <nu-grid content="center" padding="2x top">
    <nu-flow width="80vw">
      <nu-attrs for="flow" padding="2x 0"></nu-attrs>

      <nu-flow>
        <nu-heading level="3" align="center" padding="0" size="4x">
          <nu-attrs for="nu-in" color="special"></nu-attrs>
          Projet : <nu-in text="b">{{ project["name"] }}</nu-in>
        </nu-heading>
      </nu-flow>

      <!-- Quote/Description -->
      <nu-flow>
        <nu-blockquote size="md">
          {{ project["quote"]["text"] }}
          <nu-block v-if="notEmpty(project['quote']['link'])" text="n">
            <nu-in color="special">- </nu-in>
            <nu-link :to="project['quote']['link']" text="i">
              {{ project["quote"]["link"] }}
            </nu-link>
          </nu-block>
        </nu-blockquote>
      </nu-flow>

      <!-- Objects -->
      <nu-flow>
        <nu-heading level="4">Objectifs généraux</nu-heading>

        <nu-list>
          <nu-listitem v-for="obj in project['objectives']" :key="obj">
            {{ obj }}
          </nu-listitem>
        </nu-list>
      </nu-flow>

      <!-- Contexte et dates -->
      <nu-flow>
        <nu-heading level="4">Contexte</nu-heading>

        <nu-block>{{ project["context"]["brief"] }}</nu-block>
        <nu-spacer></nu-spacer>
        <nu-list>
          <nu-listitem>
            Date de début du projet: {{ project["context"]["startDate"] }}
          </nu-listitem>
          <nu-listitem>
            Date de livraison: {{ project["context"]["endDate"] }}
          </nu-listitem>
          <nu-listitem>
            Objet de la livraison: {{ project["context"]["object"] }}
          </nu-listitem>
        </nu-list>
      </nu-flow>

      <!-- Attentes/Contraintes -->
      <nu-flow align="center">
        <nu-attrs for="block" padding="1x top" size="lg"></nu-attrs>

        <nu-block v-if="notEmpty(project['critical']['expectation'])">
          <nu-el color="special" text="b">Attentes :</nu-el>
          {{ project["critical"]["expectation"] }}
        </nu-block>
        <nu-block v-if="notEmpty(project['critical']['constraints'])">
          <nu-el color="special" text="b">Contraintes :</nu-el>
          {{ project["critical"]["constraints"] }}
        </nu-block>
        <nu-block v-if="notEmpty(project['critical']['results'])">
          <nu-el color="special" text="b">Résultats :</nu-el>
          {{ project["critical"]["results"] }}
        </nu-block>
      </nu-flow>

      <!-- Réalisation -->
      <nu-flow>
        <nu-heading level="4">Réalisation</nu-heading>
        <nu-block>{{ project["realisation"] }}</nu-block>
      </nu-flow>

      <!-- Compétences acquises -->
      <nu-flow align="center">
        <nu-attrs for="block" padding="1x bottom"></nu-attrs>

        <nu-heading level="4">
          Compétences mobilisées et/ou acquises au cours du projet
        </nu-heading>
        <nu-grid columns="repeat(2, 50%)" content="center" gap="5x">
          <!-- Compétences informatiques -->
          <nu-flow align="right">
            <nu-heading>
              Informatiques <nu-icon name="desktop-outline"></nu-icon>
            </nu-heading>
            <nu-block v-for="text in project['skills']['IT']" :key="text">
              {{ text }}
            </nu-block>
          </nu-flow>

          <!-- Compétences transversales -->
          <nu-flow align="left">
            <nu-heading>
              <nu-icon name="folder-outline"></nu-icon> Transversales
            </nu-heading>
            <nu-block
              v-for="text in project['skills']['interdisciplinary']"
              :key="text"
            >
              {{ text }}
            </nu-block>
          </nu-flow>
        </nu-grid>
      </nu-flow>
    </nu-flow>
  </nu-grid>
</template>

<script>
import { fetch_project } from "@/assets/utils";
import Navbar from "@/components/elements/Navbar";

export default {
  name: "ProjectDetails",
  components: { Navbar },
  data: () => ({
    project: null,
  }),
  methods: {
    notEmpty: (str) => str.length > 0,
  },
  async created() {
    this.project = await fetch_project(
      "/json/projects.json",
      this.$route.params.slug
    );

    if (this.project == null) {
      // replaces this route with Not Found if the project doesn't exist
      await this.$router.replace({
        name: "NotFound",
        params: { pathMatch: this.$route.path.substring(1).split("/") },
        query: this.$route.query,
        hash: this.$route.hash,
      });
    }
  },
};
</script>

<style scoped></style>
