<template>
  <nu-flex padding="2x 4x">
    <nu-link to="/#/">
      <SiteLogo />
    </nu-link>
    <nu-block grow="1"></nu-block>
    <nu-flex content="flex-end" gap="3x" items="center">
      <nu-link
        v-for="item in this.menu"
        :to="`/#${item['link']}`"
        :key="item"
        size="lg"
        padding="0 1x"
      >
        {{ item["text"] }}
      </nu-link>
    </nu-flex>
  </nu-flex>
</template>

<script>
import SiteLogo from "@/components/elements/SiteLogo";

export default {
  name: "Navbar",
  components: { SiteLogo },
  data: () => ({
    menu: [
      { link: "/cv/projects", text: "Projets" },
      { link: "/video", text: "Présentation vidéo" },
      { link: "/cv/", text: "CV" },
    ],
  }),
};
</script>

<style scoped></style>
