<template>
  <nu-flex
    content="center"
    padding="3x 0 2x 0"
    align="center"
    theme="primary"
    fill="background"
    id="footer"
  >
    <nu-flex flow="column">
      <nu-block>&copy; Copyright 2021 - All rights reserved</nu-block>
      <nu-block>
        Made by hand with <nu-icon name="heart" color="red"></nu-icon> by Fabien
        Zoccola using <nu-link to="https://vuejs.org/">Vue.js</nu-link>
      </nu-block>
    </nu-flex>
  </nu-flex>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
}
</style>
