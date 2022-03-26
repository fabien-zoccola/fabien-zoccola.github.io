<template>
  <template v-for="project in items" :key="project">
    <nu-link :to="`/#/project/${project['__key']}`" text="n">
      <nu-card>
        <nu-flow>
          <nu-heading level="5" :key="project['name']">
            {{ project["name"] }}
          </nu-heading>
          <nu-block :key="project['brief']">{{ project["brief"] }}</nu-block>
        </nu-flow>
      </nu-card>
    </nu-link>
  </template>
</template>

<script>
import {
  FILTER_DESC_THEN_ALPHABETICAL,
  json_fetch_return,
} from "@/assets/utils";

export default {
  name: "Projects",
  data: () => ({
    items: null,
  }),
  async created() {
    this.items = await json_fetch_return(
      "/json/projects.json",
      ["projects"],
      FILTER_DESC_THEN_ALPHABETICAL,
      "date",
      "name"
    );
  },
};
</script>

<style scoped></style>
