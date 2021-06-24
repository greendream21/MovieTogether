import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AgoraRTC from "../agora-rtc-vue/lib/agora-rtc-vue.umd.min";

import "../agora-rtc-vue/lib/agora-rtc-vue.css";

Vue.use(AgoraRTC, {
  appid: "", // Your Appid
  token: "", // Your Appid
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
