<template>
  <nu-theme hue="220" saturation="65" mod="tone strong"></nu-theme>
  <nu-theme
    name="secondary"
    hue="132"
    saturation="80"
    mod="tone strong"
  ></nu-theme>
  <nu-props
    bg-color="#secondary-bg"
    text-color="#secondary-text"
    text-soft-color="#secondary-text-soft"
    text-strong-color="#secondary-text-strong"
    subtle-color="#secondary-subtle"
    shadow-color="#secondary-shadow"
    border-color="#secondary-border"
    special-shadow-color="#secondary-special-shadow"
  ></nu-props>

  <nu-flex flow="column" height="100vh">
    <nu-flow grow="0" id="main-container">
      <router-view />
    </nu-flow>
    <nu-block grow="1"></nu-block>
    <Footer grow="0" />
  </nu-flex>
</template>

<script>
import Footer from "@/components/elements/Footer";
export default {
  components: { Footer },
};
</script>

<style>
#app,
#main-container {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", sans-serif;
  background: #1c2d33;
}
</style>
