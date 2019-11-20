import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./cube-ui.js";
// 全局scss
import "./sass/index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
