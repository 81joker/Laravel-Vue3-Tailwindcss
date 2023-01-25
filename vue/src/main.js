import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import "./index.css";
import store from "./store";
import router from "./router";

createApp(App).use(store).use(router).mount("#app");
