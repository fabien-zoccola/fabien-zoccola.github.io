<template>
  <nu-block>{{ $route.params.slug }}</nu-block>
</template>

<script>
import { fetch_project } from "@/assets/utils";

export default {
  name: "ProjectDetails",
  data: () => ({
    project: null,
  }),
  async created() {
    this.project = await fetch_project(
      "/json/projects.json",
      this.$route.params.slug
    );

    if (this.project == null) {
      // replaces this route with Not Found if the project doesn't exist
      await this.$router.replace({
        name: "NotFound",
        params: { pathMatch: this.$route.path.substring(1).split("/") },
        query: this.$route.query,
        hash: this.$route.hash,
      });
    }
  },
};
</script>

<style scoped></style>
