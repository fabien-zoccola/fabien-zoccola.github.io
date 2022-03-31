<template>
  <Navbar />
  <LandingProfile />
</template>

<script>
import LandingProfile from "@/components/home/LandingProfile.vue";
import Navbar from "@/components/elements/Navbar";
import { set_title } from "@/assets/utils";

export default {
  name: "Home",
  components: {
    Navbar,
    LandingProfile,
  },
  created() {
    set_title();
  },
};
</script>
