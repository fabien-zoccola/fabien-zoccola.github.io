<template>
  <nu-img
    margin="auto"
    :src="sitelogo"
    label="Portfolio de Fabien Zoccola"
    radius="20px"
  ></nu-img>
</template>

<script>
import { SiteLogo, SiteLogoMinimal } from "@/assets";

export default {
  name: "SiteLogo",
  data: () => ({
    sitelogo: null,
  }),
  props: {
    minimal: Boolean,
  },
  created() {
    this.sitelogo = this.minimal ? SiteLogoMinimal : SiteLogo;
  },
};
</script>

<style scoped></style>
