import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import tailwind from "../input.css"

createApp(App).use(router).mount("#app");
