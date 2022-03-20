<template>
  <nu-block size="sm">
    <nu-icon :name="icon" padding="2x right"></nu-icon>
    <nu-in :v-html="desc" v-if="!isLink"></nu-in>
    <nu-link :to="linkRef" v-if="isLink">{{ desc }}</nu-link>
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
