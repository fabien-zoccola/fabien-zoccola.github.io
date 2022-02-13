import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

let app = createApp(App);

app.config.ignoredElements = [/^nu-/];
app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith("nu-");
};

app.use(router).mount("#app");
