<template>
  <nu-img
    :src="profilepicture"
    :height="height"
    width="auto"
    label="Fabien Zoccola"
    border="0.5x"
    radius="round"
  ></nu-img>
</template>

<script>
import { ProfilePicture } from "@/assets";

export default {
  name: "ProfilePicture",
  props: {
    height: String,
  },
  data: () => ({
    profilepicture: ProfilePicture,
  }),
};
</script>

<style scoped></style>
