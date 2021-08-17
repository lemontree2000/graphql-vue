import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./gql/test";

createApp(App).use(router).mount("#app");
