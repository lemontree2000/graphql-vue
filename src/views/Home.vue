<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { pagesQueryGql } from "../gql/test";
import { fetchData } from "../utils/request";

const data = {
  page: 1,
  type: "ANIME",
  format: ["MOVIE"],
  sort: ["TRENDING_DESC", "POPULARITY_DESC"],
};
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    onMounted(() => {
      fetchData(pagesQueryGql, data).then((res) => {
        console.log(res);
      });
    });
    return {};
  },
});
</script>
