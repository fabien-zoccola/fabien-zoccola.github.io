<template>
  <nu-grid columns="25vw 75vw" class="full-height">
    <nu-flex content="flex-start" align="center" flow="column" padding="4x top" gap="3x">
      <nu-flex flow="column">
        <ProfilePicture height="250px" />
        <nu-heading level="2" size="xxl" padding="1x top">
          Fabien Zoccola
        </nu-heading>
      </nu-flex>
      <nu-flow>
        <nu-heading level="4" size="lg">Contact</nu-heading>
        <BlockLinkIcon
          icon="call-outline"
          is-link="true"
          :desc="phoneNumber['plain']"
          :link-ref="phoneNumber['ref']"
        />
        <BlockLinkIcon
          icon="mail-outline"
          is-link="true"
          :desc="email['plain']"
          :link-ref="email['ref']"
        />
      </nu-flow>
      <nu-flow>
        <nu-heading level="4" size="lg">Réseaux Sociaux</nu-heading>
        <BlockLinkIcon
          icon="logo-linkedin"
          is-link="true"
          :desc="linkedIn['plain']"
          :link-ref="linkedIn['ref']"
        />
        <BlockLinkIcon
          icon="logo-github"
          is-link="true"
          :desc="github['plain']"
          :link-ref="github['ref']"
        />
      </nu-flow>
    </nu-flex>
    <nu-flex content="flex-start" flow="column" padding="4x top">
      <nu-flex>
        <nu-ph size="h4" opacity=".24" width="20x"></nu-ph>
      </nu-flex>
      <nu-flow><router-view></router-view></nu-flow>
    </nu-flex>
  </nu-grid>
</template>

<script>
import ProfilePicture from "@/components/elements/ProfilePicture";
import { to_html_hex, from_html_ex } from "@/assets/utils";
import BlockLinkIcon from "@/components/elements/BlockLinkIcon";

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
  },
};
</script>

<style scoped>
.full-height {
  min-height: 100vh;
}
</style>
