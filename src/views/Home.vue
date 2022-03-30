<template>
  <Navbar />
  <LandingProfile />
</template>

<script>
import LandingProfile from "@/components/home/LandingProfile.vue";
import Navbar from "@/components/elements/Navbar";

export default {
  name: "Home",
  components: {
    Navbar,
    LandingProfile,
  },
};
</script>
