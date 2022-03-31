<template>
  <nu-flex height="70vh" class="landing">
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
          Développeur Web Full-stack
        </nu-block>
        <nu-block align="right" font="Montserrat">
          Passionné d'informatique
        </nu-block>
      </nu-flow>
    </nu-flex>

    <nu-flex width="40vw">
      <ProfilePicture height="300px" />
    </nu-flex>
  </nu-flex>
</template>

<script>
import ProfilePicture from "@/components/elements/ProfilePicture";

export default {
  name: "LandingProfile",
  components: { ProfilePicture },
};
</script>

<style scoped>
.landing {
  background-image: url("~@/assets/landing-banner.jpg");
}
</style>
