<template>
  <!-- Main heading, full size -->
  <nu-flex
    content="space-around"
    flow="column"
    text="center"
    padding="2x bottom"
  >
    <nu-heading>CV</nu-heading>
    <nu-block>
      <nu-attrs for="link" padding="5px" text="n underline"></nu-attrs>
      <nu-link to="/#/">Retour à l'accueil</nu-link>
      <nu-link to="/#/cv/experiences" :class="is('experiences')">
        Expériences
      </nu-link>
      <nu-link to="/#/cv/skills" :class="is('skills') || is('')">
        Compétences
      </nu-link>
      <nu-link to="/#/cv/projects" :class="is('projects')">Projets</nu-link>
      <nu-link to="/#/cv/formations" :class="is('formations')">
        Formation
      </nu-link>
    </nu-block>
  </nu-flex>
  <hr />
  <nu-grid columns="15vw 45vw" padding="0 20vw">
    <!-- Sidebar with info and photo -->
    <nu-flex
      content="flex-start"
      align="center"
      flow="column"
      padding="4x top"
      gap="3x"
    >
      <nu-attrs for="heading" level="4" size="lg"></nu-attrs>

      <nu-flex flow="column">
        <ProfilePicture height="250px" />
        <nu-heading level="2" size="xxl" padding="1x top">
          Fabien Zoccola
        </nu-heading>
      </nu-flex>
      <nu-flow>
        <nu-heading>Contact</nu-heading>
        <BlockLinkIcon
          icon="call-outline"
          is-link
          :desc="phoneNumber['plain']"
          :link-ref="phoneNumber['ref']"
        />
        <BlockLinkIcon
          icon="mail-outline"
          is-link
          :desc="email['plain']"
          :link-ref="email['ref']"
        />
      </nu-flow>
      <nu-flow>
        <nu-heading>Réseaux Sociaux</nu-heading>
        <BlockLinkIcon
          icon="logo-linkedin"
          is-link
          :desc="linkedIn['plain']"
          :link-ref="linkedIn['ref']"
        />
        <BlockLinkIcon
          icon="logo-github"
          is-link
          :desc="github['plain']"
          :link-ref="github['ref']"
        />
      </nu-flow>
      <nu-flow>
        <nu-heading>Version PDF</nu-heading>
        <nu-link
          to="https://mega.nz/file/qaITmaqQ#wiv5yUNlHmlmz8hNA_7pz5WEHcsUNdt7oMLQI_vvB8Q"
          text="n"
          theme="primary"
        >
          <nu-btn>
            <nu-icon name="download-outline"></nu-icon>
            Télécharger le CV
          </nu-btn>
        </nu-link>
      </nu-flow>
    </nu-flex>
    <!-- Main content on the right of the sidebar -->
    <nu-flex content="flex-start" flow="column" padding="4x top">
      <nu-flex content="space-around">
        <nu-heading level="3" padding="2x bottom">
          {{ $route.name.toUpperCase() }}
        </nu-heading>
      </nu-flex>
      <nu-flow height="65vh" overflow="n y" padding="1x">
        <nu-attrs for="card" clear shadow=".5"></nu-attrs>
        <router-view></router-view>
      </nu-flow>
    </nu-flex>
  </nu-grid>
</template>

<script>
import ProfilePicture from "@/components/elements/ProfilePicture";
import { to_html_hex, from_html_ex } from "@/assets/utils";
import BlockLinkIcon from "@/components/elements/BlockLinkIcon";
import { useRoute } from "vue-router";

export default {
  name: "CV",
  components: { BlockLinkIcon, ProfilePicture },
  data: () => ({
    phoneNumber: {
      plain: "+33 06 62 96 65 86",
      ref: `tel:${to_html_hex("+33 06 62 96 65 86")}`,
    },
    email: {
      plain: "fabien.zoccola@gmx.fr",
      ref: `mailto:${to_html_hex("fabien.zoccola@gmx.fr")}`,
    },
    linkedIn: {
      plain: "fabien-zoccola",
      ref: "https://www.linkedin.com/in/fabien-zoccola/",
    },
    github: {
      plain: "BioTheWolff",
      ref: "https://github.com/BioTheWolff",
    },
  }),
  methods: {
    from_html_ex,
    is: (str) => {
      return str.toLowerCase() ===
        useRoute().path.split("/").slice(-1)[0].toLowerCase()
        ? "current"
        : "";
    },
  },
};
</script>

<style scoped>
nu-link.current {
  background: rgba(30, 201, 217, 0.2);
  pointer-events: none;
}

hr {
  border-color: lightgreen;
}
</style>
