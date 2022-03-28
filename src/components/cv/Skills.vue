<template>
  <nu-grid flow="row" gap="2x">
    <template v-for="skill in items" :key="skill">
      <nu-card>
        <nu-flex content="space-between">
          <nu-flow>
            <nu-heading level="3" size="xl" :key="skill['name']">
              {{ skill["name"] }}
            </nu-heading>
            <nu-el
              v-for="c in skill['children']"
              class="subskills"
              :key="c"
              padding="10px right"
              theme="primary"
            >
              {{ c }}
            </nu-el>
          </nu-flow>
          <nu-block>
            <nu-icon
              name="star"
              v-for="c in Number(skill['level'])"
              :key="c"
            ></nu-icon>
            <nu-icon
              name="star-outline"
              v-for="c in maxStars - Number(skill['level'])"
              :key="c"
            ></nu-icon>
          </nu-block>
        </nu-flex>
      </nu-card>
    </template>
  </nu-grid>
</template>

<script>
import {
  json_fetch_return,
  FILTER_DESC_THEN_ALPHABETICAL,
} from "@/assets/utils";

export default {
  name: "Skills",
  data: () => ({
    items: null,
    maxStars: 5,
  }),
  async created() {
    this.items = await json_fetch_return(
      "/json/skills.json",
      null,
      FILTER_DESC_THEN_ALPHABETICAL,
      "level",
      "name"
    );
  },
};
</script>

<style scoped>
.subskills:not(:last-child):after {
  content: ",";
}
</style>
