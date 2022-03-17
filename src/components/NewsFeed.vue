<script setup lang="ts">
import NewsFeedItem from "./NewsFeedItem.vue";
import { useNewsStore } from "@/stores/news";

const store = useNewsStore();
console.log(store.otherNews?.articleFeed[0].title);
</script>

<template>
  <div class="max-w-xl">
    <NewsFeedItem
      v-for="(article, index) in store.otherNews?.articleFeed"
      :key="index"
    />
  </div>
</template>
