<template>
  <nu-block size="md">
    <nu-icon :name="icon" padding="2x right"></nu-icon>
    <nu-in :v-html="desc" v-if="!isLink" text="n"></nu-in>
    <nu-link :to="linkRef" v-if="isLink" text="n">{{ desc }}</nu-link>
  </nu-block>
</template>

<script>
export default {
  name: "BlockLinkIcon",
  props: {
    desc: String,
    icon: String,
    isLink: Boolean,
    linkRef: String,
  },
};
</script>

<style scoped></style>
