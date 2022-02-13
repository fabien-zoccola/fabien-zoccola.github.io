// vue.config.js

module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with ion- as custom elements
          isCustomElement: (tag) => tag.startsWith("nu-"),
        },
      }));
  },
};
