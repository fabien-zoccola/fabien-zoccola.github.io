<template>
  <nu-img
    margin="auto"
    :src="profilepicture"
    :height="height"
    width="auto"
    label="Fabien Zoccola"
    :border="border"
    :radius="radius"
  ></nu-img>
</template>

<script>
import { ProfilePicture } from "@/assets";

export default {
  name: "ProfilePicture",
  props: {
    height: String,
    isColumn: Boolean,
    isBorder: Boolean,
  },
  data: () => ({
    profilepicture: ProfilePicture,
    dim1: "",
    dim2: "",
    border: "0",
    radius: "",
  }),
  created() {
    if (this.isBorder) {
      this.border = "0.5x";
      this.radius = "round";
    }
  },
};
</script>

<style scoped></style>
