<template>
  <nu-grid columns="25vw 75vw">
    <nu-grid>
      <ProfilePicture height="250px" />
    </nu-grid>
    <router-view></router-view>
  </nu-grid>
</template>

<script>
import ProfilePicture from "@/components/elements/ProfilePicture";
export default {
  name: "CV",
  components: { ProfilePicture },
};
</script>

<style scoped></style>
