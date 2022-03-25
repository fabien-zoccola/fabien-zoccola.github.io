<template>
  <template v-for="skill in items" :key="skill">
    <nu-card>
      <nu-flow>
        <nu-block :key="skill['name']">{{ skill["name"] }}</nu-block>
        <nu-block :key="skill['level']">Niveau {{ skill["level"] }}/5</nu-block>
        <nu-heading level="5">Compétences associées :</nu-heading>
        <nu-block v-for="c in skill['children']" :key="c">
          {{ c }}
        </nu-block>
      </nu-flow>
    </nu-card>
  </template>
</template>

<script>
import { json_fetch_return, FILTER_SKILL_LEVEL_DESC } from "@/assets/utils";

export default {
  name: "Skills",
  data: () => ({
    items: null,
  }),
  async created() {
    this.items = await json_fetch_return(
      "/json/skills.json",
      FILTER_SKILL_LEVEL_DESC
    );
  },
};
</script>

<style scoped></style>
