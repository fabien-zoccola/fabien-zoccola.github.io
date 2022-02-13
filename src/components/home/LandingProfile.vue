<template>
  <nu-flex height="80vh" class="landing">
    <nu-theme hue="186" saturation="65" mod="tone strong"></nu-theme>
    <nu-attrs
      for="flex"
      style="justify-content: center; align-items: center"
    ></nu-attrs>

    <nu-flex width="60vw">
      <nu-flow size="lg" gap="0.5x">
        <nu-h1 size="hero" theme="secondary" font="Montserrat">
          Fabien Zoccola
        </nu-h1>

        <nu-block align="right" font="Montserrat">
          Passionné d'informatique
        </nu-block>
      </nu-flow>
    </nu-flex>

    <nu-flex width="40vw">
      <nu-img
        :src="profilepicture"
        height="300px"
        width="auto"
        label="Fabien Zoccola"
        border="0.5x"
        radius="round"
      ></nu-img>
    </nu-flex>
  </nu-flex>
</template>

<script>
import { ProfilePicture } from "@/assets";

export default {
  name: "LandingProfile",
  data: () => ({
    profilepicture: ProfilePicture,
  }),
};
</script>

<style scoped>
.landing {
  background-image: url("~@/assets/landing-banner.jpg");
}
</style>
