<template>
  <nu-theme hue="274" saturation="65" mod="tone strong"></nu-theme>
  <nu-theme
    name="secondary"
    hue="200"
    saturation="65"
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
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </div>-->
  <router-view />
</template>

<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
