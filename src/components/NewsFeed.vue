<script setup lang="ts">
import NewsFeedItem from "./NewsFeedItem.vue";
import { useNewsStore } from "@/stores/news";

const store = useNewsStore();
console.log(store.otherNews?.articleFeed[0].title);
</script>

<template>
  <div class="max-w-xl overflow-y-scroll max-h-full">
    <NewsFeedItem
      v-for="(article, index) in store.otherNews?.articleFeed"
      :key="index"
      :title="article.title"
      :description="article.description"
    />
  </div>
</template>
