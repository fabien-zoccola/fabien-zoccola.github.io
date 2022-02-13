<template>
  <template v-for="ex in items">
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
export default {
  name: "Experiences",
  data: () => ({
    items: null,
  }),
  created() {
    fetch("/json/experiences.json")
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
      });
  },
};
</script>

<style scoped></style>
