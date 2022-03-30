<template>
  <nu-flex padding="2x 4x">
    <nu-link to="/#/">
      <SiteLogo />
    </nu-link>
    <nu-block grow="1"></nu-block>
    <nu-menu>
      <template v-for="item in this.menu" :key="item">
        <nu-menuitem>
          <nu-link :to="`/#${item['link']}`" :key="item">
            {{ item["text"] }}
          </nu-link>
        </nu-menuitem>
      </template>
    </nu-menu>
  </nu-flex>
</template>

<script>
import SiteLogo from "@/components/elements/SiteLogo";

export default {
  name: "Navbar",
  components: { SiteLogo },
  data: () => ({
    menu: [
      { link: "", text: "" },
      { link: "/cv", text: "CV" },
    ],
  }),
};
</script>

<style scoped></style>
