<template>
  <div class="home">
    <section class="list">
      <div class="item" v-for="item in medias" :key="item.bannerImage">
        <div
          class="image-wrapper"
          :style="{ background: item.coverImage.color }"
        >
          <img :src="item.bannerImage" alt="" />
        </div>
        <div class="info-item">
          <span
            ><b>{{ item.title.userPreferred }}</b></span
          >
          <span>Score: {{ item.averageScore }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { IMedia } from "@/types";
import { get } from "lodash";
import { defineComponent } from "vue";
import { pagesQueryGql } from "../gql/anilist";
import { fetchData } from "../utils/request";

const data = {
  page: 1,
  type: "ANIME",
  format: ["MOVIE"],
  sort: ["TRENDING_DESC", "POPULARITY_DESC"],
};

export default defineComponent({
  data(): { medias: IMedia[] } {
    return {
      medias: [],
    };
  },
  async mounted() {
    const res = await fetchData(pagesQueryGql, data);
    const { media } = get(res, "data.Page");
    this.medias = media;
  },
});
</script>

<style lang="sass" scoped>
.home
  display: flex
  padding: 0 50px
  .list
    display: flex
    flex-wrap: wrap
    .item
      width: 50%
      padding: 0 5px
      margin-bottom: 10px
      text-align: left
      box-sizing: border-box
      .info-item
        display: flex
        margin-top: 10px
        justify-content: space-between
      .image-wrapper
        height: 90px
        overflow: hidden
      img
        width: 100%
</style>
