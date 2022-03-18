<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import Headline from "./components/Headline.vue";
import Footer from "./components/Footer.vue";
import NewsFeed from "./components/NewsFeed.vue";
import { useNewsStore } from "./stores/news";
import { useSelectorStore } from "./stores/selector";
import { onMounted, watchEffect } from "vue";

const selectorStore = useSelectorStore();
const store = useNewsStore();

onMounted(() => store.fetchNews(selectorStore.option).then(newData) => {
  news: newData
});

watchEffect(() => {
  store.fetchNews(selectorStore.option).then((newData) => {
    store.$patch({
      news: newData,
    });
  });
});
</script>

<template>
  <main class="flex flex-col min-h-screen">
    <NavBar />
    <div class="h-[90vh] max-w-7xl mx-auto w-full flex justify-between pt-28">
      <Headline />
      <NewsFeed />
    </div>
    <Footer>
      <template #icon>
        <font-awesome-icon class="text-red-800" :icon="['fas', 'heart']" />
      </template>
    </Footer>
  </main>
</template>

<style>
@import "./index.css";
</style>
