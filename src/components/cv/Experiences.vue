<template>
  <template v-for="ex in items" :key="ex">
    <nu-card>
      <nu-flow>
        <nu-block :key="ex['type']">{{ ex["type"] }}</nu-block>
        <nu-block :key="ex['jobTitle']">{{ ex["jobTitle"] }}</nu-block>
        <nu-block :key="ex['company']">{{ ex["company"] }}</nu-block>
      </nu-flow>
    </nu-card>
  </template>
</template>

<script>
import { json_fetch_return, FILTER_START_DATE_DESC } from "@/assets/utils";

export default {
  name: "Experiences",
  data: () => ({
    items: null,
  }),
  async created() {
    this.items = await json_fetch_return(
      "/json/experiences.json",
      FILTER_START_DATE_DESC
    );
  },
};
</script>

<style scoped></style>
